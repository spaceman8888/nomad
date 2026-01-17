import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./MobileNav";

const navItems = [
  { href: "/cities", label: "도시" },
  { href: "/ranking", label: "랭킹" },
  { href: "/community", label: "커뮤니티" },
  { href: "/meetups", label: "밋업" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">노마드코리아</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">검색</span>
          </Button>
          <Button asChild className="hidden md:inline-flex">
            <Link href="/login">로그인</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
