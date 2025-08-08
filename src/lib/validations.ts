import { z } from 'zod';

// Generic user schema
export const userSchema = z.object({
  id: z.string(),
  name: z.string().min(1, 'Name is required'),
  email: z.email('Invalid email format'),
  createdAt: z.date(),
});

// User creation schema
export const createUserSchema = userSchema.omit({ id: true, createdAt: true });

// User update schema
export const updateUserSchema = userSchema.pick({ name: true, email: true });

// Generic content schema
export const contentSchema = z.object({
  id: z.string().optional(),
  title: z.string().min(1, 'Title is required'),
  content: z.string().min(1, 'Content is required'),
  status: z.enum(['draft', 'published', 'archived']).default('draft'),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export const apiResponseSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  data: z.any().optional(),
});

export const paginationSchema = z.object({
  page: z.number().min(1),
  limit: z.number().min(1).max(100),
  total: z.number(),
});

export const createContentSchema = contentSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updateContentSchema = contentSchema.partial().extend({
  id: z.string(),
});

// Export types for use in components
export type User = z.infer<typeof userSchema>;
export type Content = z.infer<typeof contentSchema>;
export type CreateContent = z.infer<typeof createContentSchema>;
export type UpdateContent = z.infer<typeof updateContentSchema>;
export type ApiResponse = z.infer<typeof apiResponseSchema>;
export type Pagination = z.infer<typeof paginationSchema>;
