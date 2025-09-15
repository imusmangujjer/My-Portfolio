import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';
import { USER_DETAILS } from "@/lib/data";
import { TypedRoles } from "./typed-roles";
import Link from "next/link";

export function Hero() {
  return (
    <section id="home" className="relative h-[calc(100vh-10rem)] w-full">
      <div className="flex h-full flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block text-muted-foreground">I'm a</span>
          <span className="block min-h-[1.2em]">
            <TypedRoles roles={USER_DETAILS.roles} />
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {USER_DETAILS.tagline}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#contact">Get In Touch</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Link href="#about" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 animate-bounce text-muted-foreground" />
        </Link>
      </div>
    </section>
  );
}
