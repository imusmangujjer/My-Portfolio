"use client";

import { useEffect, useState } from 'react';
import { SectionWrapper } from './section-wrapper';
import { SectionHeader } from './section-header';
import { ProjectCard } from './project-card';
import { Skeleton } from '@/components/ui/skeleton';
import { SOCIAL_LINKS } from '@/lib/data';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from 'lucide-react';

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

export function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const githubUrl = SOCIAL_LINKS.find(l => l.name === 'GitHub')?.href;
        if (!githubUrl) {
            setError("GitHub username not found.");
            setLoading(false);
            return;
        }
        const githubUsername = githubUrl.split('/').pop();

        const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=pushed&per_page=6`);
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.statusText}. You might have hit the rate limit.`);
        }
        const data = await response.json();
        setRepos(data);
      } catch (e) {
        if (e instanceof Error) {
            setError(e.message);
        } else {
            setError("An unknown error occurred.");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return (
    <SectionWrapper id="projects">
      <SectionHeader title="Projects" subtitle="Some of my recent work on GitHub" />
      {error && (
        <Alert variant="destructive" className="mb-8">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Error Fetching Projects</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="flex flex-col space-y-3 rounded-lg border bg-card p-6">
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
               <Skeleton className="h-[100px] w-full" />
              <div className="flex justify-between">
                <Skeleton className="h-8 w-1/4" />
                 <Skeleton className="h-8 w-1/4" />
              </div>
            </div>
          ))
        ) : (
          repos.map((repo, index) => <ProjectCard key={repo.id} repo={repo} index={index} />)
        )}
      </div>
    </SectionWrapper>
  );
}
