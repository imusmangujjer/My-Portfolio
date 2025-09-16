"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { NAV_LINKS, SOCIAL_LINKS, RESUME_URL, USER_DETAILS } from '@/lib/data';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Left side: Name and Desktop Nav */}
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">{USER_DETAILS.name}</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Right side: Social Links and Resume Button (Desktop) */}
        <div className="hidden md:flex items-center space-x-2">
          {SOCIAL_LINKS.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild>
              <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-4 w-4" />
              </a>
            </Button>
          ))}
          <Button asChild>
            <a href={RESUME_URL} download>Download Resume</a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col h-full">
                  <SheetClose asChild>
                    <Link href="/" className="font-bold border-b pb-4">
                      {USER_DETAILS.name}
                    </Link>
                  </SheetClose>
                  <nav className="flex flex-col gap-4 py-4">
                    {NAV_LINKS.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="text-lg font-medium"
                        >
                          {link.name}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                  <div className="mt-auto border-t pt-4">
                    <div className="flex items-center justify-center space-x-4">
                      {SOCIAL_LINKS.map((link) => (
                        <Button key={link.name} variant="ghost" size="icon" asChild>
                          <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                            <link.icon className="h-6 w-6" />
                          </a>
                        </Button>
                      ))}
                    </div>
                     <SheetClose asChild>
                      <Button className="w-full mt-4" asChild>
                        <a href={RESUME_URL} download>Download Resume</a>
                      </Button>
                    </SheetClose>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
