import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Link2,
  Link2Icon,
  Link2OffIcon,
  LogOut,
  LogOutIcon,
} from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const user = false;
  return (
    <nav className="py-4 flex justify-between items-center">
      <Link to="/">
        <img src="/url-logo.png" className="h-16" alt="Trimrr logo" />
      </Link>
      <div>
        {!user ? (
          <Button onClick={() => navigate("/auth")}>Login</Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger
              className="w-10 rounded-full overflow-hidden"
              render={<Button variant="outline" />}
            >
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>BR</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>Bipin</DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link2Icon className="mr-2 h-4 w-4" />
                  My Links
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-400">
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </nav>
  );
};

export default Header;
