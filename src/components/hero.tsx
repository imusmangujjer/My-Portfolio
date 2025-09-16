"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from 'lucide-react';
import { USER_DETAILS } from "@/lib/data";
import { TypedRoles } from "./typed-roles";
import Link from "next/link";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function Hero() {
  const userPortrait = PlaceHolderImages.find(p => p.id === 'user-portrait');

  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center -mt-14 pt-14">
      <div className="container flex h-full flex-col items-center justify-center text-center">
        
        {userPortrait && (
          <Avatar className="w-32 h-32 md:w-40 md:h-40 mb-8 border-4 border-background ring-4 ring-accent">
            <AvatarImage src={userPortrait.imageUrl} alt={userPortrait.description} />
            <AvatarFallback>{USER_DETAILS.name.substring(0, 2)}</AvatarFallback>
          </Avatar>
        )}

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
          <Button asChild size="lg" variant="blue">
            <Link href="#contact">Get In Touch</Link>
          </Button>
          <Button asChild variant="green" size="lg">
            <Link href="#projects">View My Work</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <Link href="#skills" aria-label="Scroll down">
          <ArrowDown className="h-8 w-8 animate-bounce text-muted-foreground" />
        </Link>
      </div>
    </section>
  );
}
