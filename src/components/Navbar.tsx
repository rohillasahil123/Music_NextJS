"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem} from "./ui/navbar_menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed  top-10 inset-x-0 max-w-2xl mx-auto z-50 cursor-pointer",
        className
      )}
    >
      <Menu setActive={setActive}>
        <div className="flex space-x-6">
          <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
              <div className=" space-y-6 flex-col flex ">
                <HoveredLink href="/"> Home</HoveredLink>
                <HoveredLink href="/">Courses</HoveredLink>
                <HoveredLink href="/">Documentation</HoveredLink>
              </div>
            </MenuItem>
          </Link>
          <Link href={"/Music"}>
            <MenuItem setActive={setActive} active={active} item="Music">
              <div className=" space-y-6 flex-col flex ">
                <HoveredLink href="/">Haryanvi-Song</HoveredLink>
                <HoveredLink href="/">Latest-song</HoveredLink>
                <HoveredLink href="/">Old-song</HoveredLink>
              </div>
            </MenuItem>
          </Link>
          <Link href={"/Contect"}>
            <MenuItem setActive={setActive} active={active} item="Contect-Us">
              <div className=" space-y-6 flex-col flex ">
                <HoveredLink href="/">Profile</HoveredLink>
                <HoveredLink href="/">About</HoveredLink>
                <HoveredLink href="/">Help</HoveredLink>
              </div>
            </MenuItem>
          </Link>
        </div>
      </Menu>
    </div>
  );
}
