import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionWrapper } from './section-wrapper';
import { SectionHeader } from './section-header';
import { USER_DETAILS } from '@/lib/data';

export function Skills() {
  return (
    <SectionWrapper id="skills" className="bg-muted/50">
      <div className="container">
        <SectionHeader title="My Skills" subtitle="Technologies and tools I work with" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(USER_DETAILS.skills).map(([category, skills]) => (
            <Card key={category} className="flex flex-col">
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
