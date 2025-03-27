import { pgTable, text, serial, integer, boolean, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Tabela de usuários (admin)
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email"),
  bio: text("bio"),
  role: text("role").default("admin"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Tabela de projetos
export const projects = pgTable("projects", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content"),
  technologies: text("technologies").array(),
  iconName: varchar("icon_name", { length: 50 }),
  slug: text("slug").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Tabela de artigos
export const articles = pgTable("articles", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  content: text("content"),
  publishDate: timestamp("publish_date").defaultNow(),
  readTime: integer("read_time").notNull(),
  tags: text("tags").array(),
  slug: text("slug").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Tabela de habilidades
export const skills = pgTable("skills", {
  id: serial("id").primaryKey(),
  name: text("name").notNull().unique(),
  category: text("category").notNull(),
  proficiency: integer("proficiency").notNull(), // 1-100
  icon: text("icon"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Schemas para inserção
export const insertUserSchema = createInsertSchema(users).pick({
  name: true,
  username: true,
  password: true,
  email: true,
  bio: true,
  role: true,
});

export const insertProjectSchema = createInsertSchema(projects).pick({
  title: true,
  description: true,
  content: true,
  technologies: true,
  iconName: true,
  slug: true,
});

export const insertArticleSchema = createInsertSchema(articles).pick({
  title: true,
  description: true,
  content: true,
  publishDate: true,
  readTime: true,
  tags: true,
  slug: true,
});

export const insertSkillSchema = createInsertSchema(skills).pick({
  name: true,
  category: true,
  proficiency: true,
  icon: true,
});

// Tipos para uso no app
export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertProject = z.infer<typeof insertProjectSchema>;
export type Project = typeof projects.$inferSelect;

export type InsertArticle = z.infer<typeof insertArticleSchema>;
export type Article = typeof articles.$inferSelect;

export type InsertSkill = z.infer<typeof insertSkillSchema>;
export type Skill = typeof skills.$inferSelect;
