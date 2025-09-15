'use server';

import { generateProjectSummary } from '@/ai/flows/intelligent-project-summaries';

export async function getProjectSummaryAction(projectDescription: string, readmeContent: string) {
  try {
    const result = await generateProjectSummary({
      projectDescription,
      readmeContent,
    });
    return { success: true, data: result };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Failed to generate summary.' };
  }
}
