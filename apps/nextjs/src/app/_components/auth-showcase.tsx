import { auth, signIn, signOut } from "@acme/auth";
import { Button } from "@acme/ui/button";

export async function AuthShowcase() {
  const session = await auth();

  if (!session) {
    return (
      <form>
        <Button
          formAction={async () => {
            "use server";
            await signIn("discord");
          }}
          size="lg"
        >
          Sign in with Discord
        </Button>
      </form>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl">
        {session && <span>Logged in as {session.user.name}</span>}
      </p>

      <form>
        <Button
          formAction={async () => {
            "use server";
            await signOut();
          }}
          size="lg"
        >
          Sign out
        </Button>
      </form>
    </div>
  );
}
