import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from './section-wrapper';
import { SectionHeader } from './section-header';
import { USER_DETAILS } from '@/lib/data';

export function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeader title="Education" subtitle="My academic background" />
      <div className="grid gap-8 md:grid-cols-2">
        {USER_DETAILS.education.map((item) => (
          <Card key={item.degree} className="flex">
            <div className="flex h-full items-center p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <item.icon className="h-6 w-6 text-accent" />
                </div>
            </div>
            <div className="flex-1">
                <CardHeader>
                  <CardTitle>{item.degree}</CardTitle>
                  <p className="text-sm text-muted-foreground">{item.institution} | {item.period}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
