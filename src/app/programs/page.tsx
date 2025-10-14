import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ProgramsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-4xl py-16 text-center md:py-24">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Programs
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore the programs designed to empower the next generation of innovators.
          </p>
          
          <div className="mt-12 flex justify-center">
            <Card className="w-full max-w-lg text-left">
              <CardHeader>
                <CardTitle className="text-2xl">
                  AI Product Managemnet 🧠💡
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Embark on an exciting 7-week journey into the world of product thinking and AI design!
                </p>
                <Button className="w-full" size="lg">
                  Begin
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
