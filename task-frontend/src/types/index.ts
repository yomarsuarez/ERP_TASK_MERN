import { z } from "zod";

const authSchema = z.object({
  name: z.string(),
  email: z.string(),
  password: z.string(),
  password_confirmation: z.string(),
  token: z.string(),
});

type Auth = z.infer<typeof authSchema>;
export type UserLoginForm = Pick<Auth, "email" | "password">;
export type UserRegistrationForm = Pick<
  Auth,
  "name" | "email" | "password" | "password_confirmation"
>;
export type RequestConfirmationCodeForm = Pick<Auth, "email">;
export type ForgotPasswordForm = Pick<Auth, "email">;
export type NewPasswordForm = Pick<Auth, "password" | "password_confirmation">;

export type ConfirmToken = Pick<Auth, "token">;

export const userSchema = authSchema
  .pick({
    name: true,
    email: true,
  })
  .extend({
    _id: z.string(),
  });

export type User = z.infer<typeof userSchema>;

export const taskStatusSchema = z.enum([
  "pending",
  "onHold",
  "inProgress",
  "underReview",
  "completed",
]);

export type TaskStatus = z.infer<typeof taskStatusSchema>;

export const taskSchema = z.object({
  _id: z.string(),
  name: z.string(),
  project: z.string(),
  description: z.string(),
  status: taskStatusSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
export type TaskFormData = Pick<Task, "name" | "description">;

export const projectSchema = z.object({
  _id: z.string(),
  projectName: z.string(),
  clientName: z.string(),
  description: z.string(),
  manager: z.string(),
});

export const dashboardProjectSchema = z.array(
  projectSchema.pick({
    _id: true,
    projectName: true,
    clientName: true,
    description: true,
    manager: true,
  })
);

export type Project = z.infer<typeof projectSchema>;
export type ProjectFormData = Pick<
  Project,
  "clientName" | "projectName" | "description"
>;

const teamMemberSchema = userSchema.pick({
  name: true,
  email: true,
  _id: true,
});
export const teamMembersSchema = z.array(teamMemberSchema);
export type TeamMember = z.infer<typeof teamMemberSchema>;
export type TeamMemberForm = Pick<TeamMember, "email">;
