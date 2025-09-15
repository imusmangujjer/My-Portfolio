import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SectionWrapper } from './section-wrapper';
import { SectionHeader } from './section-header';
import { USER_DETAILS } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeader title="Work Experience" subtitle="My professional journey" />
      <div className="relative">
        <div className="absolute left-5 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-border md:block md:left-1/2"></div>
        <div className="absolute left-5 top-0 h-full w-0.5 -translate-x-1/2 bg-border md:hidden"></div>
        
        <div className="space-y-12">
          {USER_DETAILS.experience.map((item, index) => (
            <div key={item.role} className="group relative md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className={cn("flex items-center", index % 2 === 0 ? "md:col-start-2" : "")}>
                <div className="md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-accent bg-background absolute left-5 top-0 -translate-x-1/2 md:static md:translate-x-0">
                        <item.icon className="h-5 w-5 text-accent" />
                    </div>
                </div>
                <div className={cn(
                    "w-full pl-14 md:pl-0",
                    index % 2 === 0 ? "md:pl-8" : "md:pr-8 md:text-right"
                )}>
                    <Card>
                        <CardHeader className={cn(index % 2 !== 0 ? "md:text-right" : "")}>
                            <CardTitle>{item.role}</CardTitle>
                            <p className="text-sm text-muted-foreground">{item.company} | {item.period}</p>
                        </CardHeader>
                        <CardContent className={cn(index % 2 !== 0 ? "md:text-right" : "")}>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                    </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
