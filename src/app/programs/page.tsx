import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ArrowLeft } from 'lucide-react';

export default function ProgramsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center">
        <div className="container py-16 text-center md:py-24">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Programs Coming Soon
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            I'm developing some exciting programs. Check back later!
          </p>
          <Button asChild className="mt-8">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Go Back Home
            </Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
