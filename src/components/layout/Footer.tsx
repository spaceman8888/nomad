import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const footerLinks = {
  법적고지: [
    { href: "/terms", label: "이용약관" },
    { href: "/privacy", label: "개인정보처리방침" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold text-primary">
              노마드코리아
            </Link>
            <p className="text-sm text-muted-foreground">
              대한민국 디지털 노마드를 위한
              <br />
              최고의 도시 정보 플랫폼
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h4 className="text-sm font-semibold">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Separator className="my-8" />
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 노마드코리아. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://instagram.com"
              className="text-muted-foreground hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </Link>
            <Link
              href="https://twitter.com"
              className="text-muted-foreground hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
