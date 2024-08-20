import Image from "next/image";
import Link from "next/link";
import logo from "../img/logo.jpg"
import { Avatar,AvatarFallback,AvatarImage } from "@radix-ui/react-avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  import ThemeToggler from "./ThemeToggler";
  

const Navbar = () => {
    return ( <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">
        <Link href="/">
            <Image src={logo} alt="Nduhiu Press" width={40}/>
        </Link>
        <div className="flex items-center">
        <ThemeToggler/>
        <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
                <Avatar>
                        <AvatarImage src="https://github.com/shadcn1.png" alt="@shadcn"/>
                        <AvatarFallback className="text-black">
                            <span className="text-sm font-medium">BT</span>
                        </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
             <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        </div>

    </div> );
}
 
export default Navbar;