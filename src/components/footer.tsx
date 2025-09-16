import { USER_DETAILS, SOCIAL_LINKS } from "@/lib/data";
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="flex w-full h-14 items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {USER_DETAILS.name}. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {SOCIAL_LINKS.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild>
              <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-4 w-4" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
