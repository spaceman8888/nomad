import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">노마드코리아</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/login">로그인</Link>
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
