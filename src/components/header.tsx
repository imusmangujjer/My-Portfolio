"use client";

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { NAV_LINKS, SOCIAL_LINKS, RESUME_URL, USER_DETAILS } from '@/lib/data';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex w-full h-14 items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">{USER_DETAILS.name}</span>
          </Link>
        </div>

        <nav className="hidden flex-1 items-center justify-center space-x-4 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center justify-end space-x-2 md:flex">
            {SOCIAL_LINKS.map((link) => (
              <Button key={link.name} variant="ghost" size="icon" asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-4 w-4" />
                </a>
              </Button>
            ))}
            <Button asChild variant="outline" size="sm" className="whitespace-nowrap">
              <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7331731579062435841" target="_blank" rel="noopener noreferrer">ReimagineAI Newsletter</a>
            </Button>
            <Button asChild size="sm" className="whitespace-nowrap">
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">Download Resume</a>
            </Button>
        </div>


        {/* Mobile Menu */}
        <div className="flex w-full items-center justify-between md:hidden">
            <Link href="/" className="font-bold">
                {USER_DETAILS.name}
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex h-full flex-col">
                  <SheetClose asChild>
                    <Link href="/" className="border-b pb-4 font-bold">
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
                      <Button className="mt-4 w-full" asChild>
                         <a href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7331731579062435841" target="_blank" rel="noopener noreferrer">ReimagineAI Newsletter</a>
                      </Button>
                    </SheetClose>
                     <SheetClose asChild>
                      <Button className="mt-4 w-full" asChild>
                        <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">Download Resume</a>
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
