import Image from 'next/image';
import { SectionWrapper } from './section-wrapper';
import { SectionHeader } from './section-header';
import { USER_DETAILS } from '@/lib/data';

export function About() {
  return (
    <SectionWrapper id="about">
      <div className="container">
        <SectionHeader title="About Me" subtitle="A little bit about my journey" />
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-3">
          <div className="relative mx-auto h-64 w-64 shadow-lg rounded-full md:h-80 md:w-80">
            <Image
              src="/profile.png"
              alt="Usman Gujjer"
              width={320}
              height={320}
              className="rounded-full object-cover"
            />
          </div>
          <div className="md:col-span-2">
            <p className="text-lg leading-relaxed text-muted-foreground">
              {USER_DETAILS.bio}
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
