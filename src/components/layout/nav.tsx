import { cn } from "~/libs";

import { LinkButton } from "~/components/reui";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  ModeToggle,
  SidebarTrigger,
} from "~/components/ui";

const useAuthStore = () => ({
  user: { name: "John Doe", avatar: "/default-avatar.png" },
});

const useLogout = () => () => {
  console.info("Logged out");
};

function Navbar() {
  const { user } = useAuthStore();
  const logout = useLogout();

  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between bg-background p-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger aria-label="Open Sidebar" variant={"link"} />
        <LinkButton
          href="/"
          className="px-0 text-lg font-bold"
          variant={"link"}
        >
          NextTodo
        </LinkButton>
      </div>

      <div className="flex items-center gap-2">
        {user ? (
          <>
            <span className={cn("text-sm font-medium")}>
              {user.name || "User"}
            </span>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar className="size-8 cursor-pointer">
                  <AvatarImage
                    src={user.avatar || "/default-avatar.png"}
                    alt={user.name || "User Avatar"}
                  />
                  <AvatarFallback>
                    {user.name ? user.name.charAt(0) : "U"}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        ) : (
          <LinkButton href="/auth/login" className="text-sm font-medium">
            Login
          </LinkButton>
        )}
        <ModeToggle aria-label="Toggle Dark Mode" />
      </div>
    </nav>
  );
}

export { Navbar };
