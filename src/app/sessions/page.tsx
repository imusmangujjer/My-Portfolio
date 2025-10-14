import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MapPin, Users } from 'lucide-react';

const sessions = [
  {
    date: {
      month: 'SEP',
      day: 16,
    },
    title: 'Build with Google AI Studio',
    location: 'Académie Ste-Cécile International School',
    attendees: 'TBD',
  },
  {
    date: {
      month: 'SEP',
      day: 27,
    },
    title: 'Build Web Apps with Vibe Coding',
    location: 'Communitech, Kitchener',
    attendees: '130+',
  },
];

export default function SessionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-4xl py-16 md:py-24 text-center">
          
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Upcoming Sessions
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Join me at these upcoming events and workshops.
            </p>
          </div>

          <div className="space-y-8">
            {sessions.map((session, index) => (
              <div
                key={index}
                className="flex items-center gap-6 mx-auto rounded-lg border bg-card p-4 shadow-sm transition-all hover:shadow-md max-w-2xl"
              >
                <div className="flex flex-col items-center justify-center rounded-lg bg-blue-600 px-6 py-4 text-white">
                  <span className="text-sm font-semibold">{session.date.month}</span>
                  <span className="text-3xl font-bold">{session.date.day}</span>
                </div>

                <div className="flex-1 text-left">
                  <h2 className="text-xl font-bold">{session.title}</h2>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{session.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{session.attendees} attendees</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
