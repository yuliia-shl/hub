import { z } from 'zod';
import { emailRegex, nameRegex, phoneRegex } from '../constants/regex';

export const nameField = z
  .string({
    error: 'Поле обов’язкове',
  })
  .min(2, 'Має містити мінімум 2 символи')
  .max(50, 'Не може перевищувати 50 символів')
  .regex(nameRegex, 'Може містити тільки літери, апострофи та дефіси.');

export const phoneField = z
  .string({
    error: 'Номер телефону обов’язковий',
  })
  .regex(phoneRegex, 'Введіть коректний номер телефону');

export const emailField = z
  .string({
    error: 'Email обов’язковий',
  })
  .max(50, 'Email не може перевищувати 50 символів')
  .regex(emailRegex, 'Невірний формат email');

export const bookModalSchema = z.object({
  role: z.enum(['Інвестор', 'Партнер', 'Локації']),
  name: nameField,
  phone: phoneField,
  email: emailField,
  question: z
    .string()
    .min(10, 'Поле має містити мінімум 10 символів')
    .max(100, 'Поле не може перевищувати 100 символів'),
});

export type BookModalSchemaType = z.infer<typeof bookModalSchema>;

export const writeUsSchema = z.object({
  name: nameField,
  phone: phoneField,
  email: emailField,
});

export type WriteUsSchemaType = z.infer<typeof writeUsSchema>;
