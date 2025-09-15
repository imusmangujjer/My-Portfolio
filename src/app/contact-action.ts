'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  const validation = contactFormSchema.safeParse(data);

  if (!validation.success) {
    return { success: false, error: 'Invalid data provided.' };
  }

  // Here you would integrate with Firebase to store the form submission
  console.log('Form data received:', validation.data);
  // This is a placeholder for the actual backend logic.
  
  return { success: true, message: 'Thank you for your message! I will get back to you soon.' };
}
