"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, GitFork } from 'lucide-react';

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
};

const buttonColors = ['blue', 'purple', 'red', 'green'] as const;
type ButtonColor = typeof buttonColors[number];


export function ProjectCard({ repo, index }: { repo: Repo; index: number }) {

  const buttonColor = buttonColors[index % buttonColors.length];

  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <CardTitle className="hover:text-accent">
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            {repo.name}
          </a>
        </CardTitle>
        <CardDescription>{repo.description || 'No description available.'}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        {/* Content can be added here if needed in the future */}
      </CardContent>
      <CardFooter className="flex-col items-start gap-4 pt-4">
        <div className="flex w-full items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            {repo.language && <Badge variant="outline" className="border-accent text-accent">{repo.language}</Badge>}
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4" /> {repo.stargazers_count}
            </div>
            <div className="flex items-center gap-1">
              <GitFork className="h-4 w-4" /> {repo.forks_count}
            </div>
          </div>
        </div>
        <Button asChild className="w-full" variant={buttonColor}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                View Project
            </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
