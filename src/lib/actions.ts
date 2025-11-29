'use server';

import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type FormState = {
  message: string;
  status: 'idle' | 'success' | 'error';
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  } | null;
};

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    return {
      message: 'Please correct the errors below.',
      status: 'error',
      errors: fieldErrors,
    };
  }
  
  try {
    // Here you would typically send an email, e.g., using Resend or Nodemailer
    console.log('Form data submitted:');
    console.log(validatedFields.data);
    
    return {
      message: 'Thank you for your message! I will get back to you soon.',
      status: 'success',
      errors: null,
    };
  } catch (error) {
    console.error('Error submitting form:', error);
    return {
      message: 'Something went wrong. Please try again later.',
      status: 'error',
      errors: null,
    };
  }
}
