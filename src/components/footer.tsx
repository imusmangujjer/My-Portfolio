import { USER_DETAILS, SOCIAL_LINKS } from "@/lib/data";
import { Button } from "./ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
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
      </div>
    </footer>
  );
}
