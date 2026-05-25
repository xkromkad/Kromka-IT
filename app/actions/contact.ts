'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ContactState {
  success: boolean;
}

export async function sendContactEmail(
  _prev: ContactState | null,
  formData: FormData,
): Promise<ContactState> {
  const name = (formData.get('name') as string | null)?.trim() ?? '';
  const email = (formData.get('email') as string | null)?.trim() ?? '';
  const message = (formData.get('message') as string | null)?.trim() ?? '';

  if (!name || !email || !message) return { success: false };

  try {
    await resend.emails.send({
      from: 'Kromka IT <noreply@kromka.it>',
      to: 'david@kromka.it',
      replyTo: email,
      subject: `Nová správa od ${name}`,
      text: `Meno: ${name}\nE-mail: ${email}\n\nSpráva:\n${message}`,
    });
    return { success: true };
  } catch {
    return { success: false };
  }
}
