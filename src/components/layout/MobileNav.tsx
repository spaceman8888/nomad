"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, MapPin, Trophy, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { href: "/cities", label: "도시", icon: MapPin },
  { href: "/ranking", label: "랭킹", icon: Trophy },
  { href: "/community", label: "커뮤니티", icon: Users },
  { href: "/meetups", label: "밋업", icon: Calendar },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">메뉴 열기</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[350px]">
        <SheetHeader>
          <SheetTitle className="text-left">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="text-xl font-bold"
            >
              노마드코리아
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <item.icon className="h-5 w-5" />
              <span className="text-lg">{item.label}</span>
            </Link>
          ))}
          <div className="my-4 border-t" />
          <Link
            href="/search"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            <Search className="h-5 w-5" />
            <span className="text-lg">검색</span>
          </Link>
          <Button className="mt-4 w-full" onClick={() => setOpen(false)}>
            로그인
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
