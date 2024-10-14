"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    "All Product", 
    "Latest Arrivals"
  ];
  return (
    <Navbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
        <ShoppingBag />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
        <ShoppingBag />
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page" color="warning">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2 ? "warning" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
    // <div className="w-full flex flex-col px-28 pt-4">
    //   <Navbar className="flex flex-col justify-center items-center self-stretch py-3"  onMenuOpenChange={setIsMenuOpen}>
    //   <NavbarContent>
    //     <NavbarMenuToggle

    //       className="sm:hidden"
    //     />
    //     <NavbarBrand>
    //       <ShoppingBag />
    //       <div>
    //         <span className="font-bold text-base text-neutral-900">
    //           StyleNest
    //         </span>
    //       </div>
    //     </NavbarBrand>
    //     </NavbarContent>
    //     <NavbarContent
    //       className="hidden flex items-center gap-8 grow"
    //       justify="center"
    //     >
    //       <NavbarItem isActive>
    //         <Link href="/products" aria-current="page">
    //           All products
    //         </Link>
    //       </NavbarItem>
    //       <NavbarItem>
    //         <Link color="foreground" href="/">
    //           Latest Arrivals
    //         </Link>
    //       </NavbarItem>
    //     </NavbarContent>
    //     <NavbarContent justify="end">
    //       <NavbarItem>
    //         <Link href="#">
    //           <ShoppingBag />
    //         </Link>
    //       </NavbarItem>
    //     </NavbarContent>
    //     <NavbarMenu>
    //     {menuItems.map((item, index) => (
    //       <NavbarMenuItem key={`${item}-${index}`}>
    //         <Link
    //           color={
    //             index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
    //           }
    //           className="w-full"
    //           href="#"
    //           size="lg"
    //         >
    //           {item}
    //         </Link>
    //       </NavbarMenuItem>
    //     ))}
    //   </NavbarMenu>
    //   </Navbar>
    // </div>
//   );
}
