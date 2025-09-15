'use server';

/**
 * @fileOverview A flow that generates intelligent summaries for portfolio projects.
 *
 * - generateProjectSummary - A function that generates a concise and engaging summary for a given project.
 * - GenerateProjectSummaryInput - The input type for the generateProjectSummary function.
 * - GenerateProjectSummaryOutput - The return type for the generateProjectSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const GenerateProjectSummaryInputSchema = z.object({
  projectDescription: z
    .string()
    .describe('A detailed description of the project.'),
  readmeContent: z
    .string()
    .describe('The content of the project README file.'),
});
export type GenerateProjectSummaryInput = z.infer<
  typeof GenerateProjectSummaryInputSchema
>;

const GenerateProjectSummaryOutputSchema = z.object({
  summary: z.string().describe('A concise and engaging summary of the project.'),
  tags: z.array(z.string()).describe('Relevant tags for the project.'),
});
export type GenerateProjectSummaryOutput = z.infer<
  typeof GenerateProjectSummaryOutputSchema
>;

export async function generateProjectSummary(
  input: GenerateProjectSummaryInput
): Promise<GenerateProjectSummaryOutput> {
  return generateProjectSummaryFlow(input);
}

const chooseRelevantInformation = ai.defineTool({
  name: 'chooseRelevantInformation',
  description: 'Chooses the most relevant information from the project description and README content for summarization.',
  inputSchema: z.object({
    projectDescription: z.string().describe('A detailed description of the project.'),
    readmeContent: z.string().describe('The content of the project README file.'),
  }),
  outputSchema: z.string(),
},
async (input) => {
  return `Project Description: ${input.projectDescription}\nReadme Content: ${input.readmeContent}`;
});

const prompt = ai.definePrompt({
  name: 'generateProjectSummaryPrompt',
  input: {schema: GenerateProjectSummaryInputSchema},
  output: {schema: GenerateProjectSummaryOutputSchema},
  tools: [chooseRelevantInformation],
  prompt: `You are an expert at creating concise and engaging summaries for software development projects.

  Given the following project information, generate a short summary and a list of relevant tags.

  Project Description: {{{projectDescription}}}
  README Content: {{{readmeContent}}}

  Instructions: Use the chooseRelevantInformation tool to get the most important information for the summary. Focus on key achievements, technologies used, and the project's overall value proposition.
  `,
});

const generateProjectSummaryFlow = ai.defineFlow(
  {
    name: 'generateProjectSummaryFlow',
    inputSchema: GenerateProjectSummaryInputSchema,
    outputSchema: GenerateProjectSummaryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
