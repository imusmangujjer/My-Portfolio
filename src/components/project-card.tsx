"use client";

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, GitFork, Sparkles, Loader2 } from 'lucide-react';
import { getProjectSummaryAction } from '@/app/actions';
import { useToast } from "@/hooks/use-toast";

type Repo = {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  owner: {
    login: string;
  };
};

export function ProjectCard({ repo }: { repo: Repo }) {
  const [summary, setSummary] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleGenerateSummary = async () => {
    setIsGenerating(true);
    setSummary(null);
    setTags([]);

    try {
      const readmeResponse = await fetch(`https://api.github.com/repos/${repo.owner.login}/${repo.name}/readme`);
      if (!readmeResponse.ok) {
        throw new Error('Could not fetch README. This repository might not have one.');
      }
      const readmeData = await readmeResponse.json();
      const readmeContent = atob(readmeData.content);

      const result = await getProjectSummaryAction(repo.description || '', readmeContent);
      if (result.success && result.data) {
        setSummary(result.data.summary);
        setTags(result.data.tags);
      } else {
        throw new Error(result.error || 'Failed to generate summary.');
      }

    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
        toast({
            variant: "destructive",
            title: "Error",
            description: errorMessage,
        });
    } finally {
      setIsGenerating(false);
    }
  };

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
        {summary && (
          <div className="space-y-2 rounded-md border bg-muted/50 p-3">
              <p className="text-sm text-foreground">{summary}</p>
              {tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 pt-2">
                      {tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
              )}
          </div>
        )}
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
        <Button onClick={handleGenerateSummary} disabled={isGenerating} className="w-full">
          {isGenerating ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            <Sparkles className="mr-2 h-4 w-4" />
          )}
          {isGenerating ? 'Generating...' : (summary ? 'Regenerate AI Summary' : 'Generate AI Summary')}
        </Button>
      </CardFooter>
    </Card>
  );
}
