import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { MapPin, Users, CalendarCheck, CalendarX } from 'lucide-react';

const sessions = [
  {
    date: {
      month: 'SEP',
      day: 16,
      year: 2025,
    },
    title: 'Build with Google AI Studio',
    location: 'Académie Ste-Cécile International School',
    attendees: 'TBD',
  },
  {
    date: {
      month: 'SEP',
      day: 27,
      year: 2024,
    },
    title: 'Build Web Apps with Vibe Coding',
    location: 'Communitech, Kitchener',
    attendees: '130+',
  },
];

const monthMap: { [key: string]: number } = {
    JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5,
    JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11
};

export default function SessionsPage() {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize today's date to the beginning of the day

  const upcomingSessions = sessions.filter(session => {
    const sessionDate = new Date(session.date.year, monthMap[session.date.month], session.date.day);
    return sessionDate >= today;
  });

  const previousSessions = sessions.filter(session => {
    const sessionDate = new Date(session.date.year, monthMap[session.date.month], session.date.day);
    return sessionDate < today;
  });


  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="w-full max-w-4xl py-16 md:py-24 text-center">
          
          <div className="mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Sessions
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Join me at these events and workshops, or review materials from past sessions.
            </p>
          </div>

          {/* Upcoming Sessions */}
          {upcomingSessions.length > 0 && (
            <div className="mb-16">
              <h2 className="flex items-center justify-center text-3xl font-bold mb-8">
                <CalendarCheck className="mr-4 h-8 w-8" />
                Upcoming Sessions
              </h2>
              <div className="space-y-8">
                {upcomingSessions.map((session, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 mx-auto rounded-lg border bg-card p-4 shadow-sm transition-all hover:shadow-md max-w-2xl"
                  >
                    <div className="flex flex-col items-center justify-center rounded-lg bg-blue-600 px-6 py-4 text-white">
                      <span className="text-sm font-semibold">{session.date.month}</span>
                      <span className="text-3xl font-bold">{session.date.day}</span>
                    </div>

                    <div className="flex-1 text-left">
                      <h3 className="text-xl font-bold">{session.title}</h3>
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
          )}

          {/* Previous Sessions */}
          {previousSessions.length > 0 && (
            <div>
              <h2 className="flex items-center justify-center text-3xl font-bold mb-8">
                <CalendarX className="mr-4 h-8 w-8" />
                Previous Sessions
              </h2>
              <div className="space-y-8">
                {previousSessions.map((session, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-6 mx-auto rounded-lg border bg-card p-4 shadow-sm transition-all hover:shadow-md max-w-2xl opacity-70"
                  >
                    <div className="flex flex-col items-center justify-center rounded-lg bg-gray-500 px-6 py-4 text-white">
                      <span className="text-sm font-semibold">{session.date.month}</span>
                      <span className="text-3xl font-bold">{session.date.day}</span>
                    </div>

                    <div className="flex-1 text-left">
                      <h3 className="text-xl font-bold">{session.title}</h3>
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
          )}

        </div>
      </main>

      <Footer />
    </div>
  );
}
