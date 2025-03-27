import { 
  users, projects, articles, skills,
  type User, type InsertUser,
  type Project, type InsertProject,
  type Article, type InsertArticle,
  type Skill, type InsertSkill
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Project methods
  getProject(id: number): Promise<Project | undefined>;
  getProjectBySlug(slug: string): Promise<Project | undefined>;
  getAllProjects(): Promise<Project[]>;
  createProject(project: InsertProject): Promise<Project>;
  updateProject(id: number, project: Partial<InsertProject>): Promise<Project | undefined>;
  deleteProject(id: number): Promise<boolean>;
  
  // Article methods
  getArticle(id: number): Promise<Article | undefined>;
  getArticleBySlug(slug: string): Promise<Article | undefined>;
  getAllArticles(): Promise<Article[]>;
  createArticle(article: InsertArticle): Promise<Article>;
  updateArticle(id: number, article: Partial<InsertArticle>): Promise<Article | undefined>;
  deleteArticle(id: number): Promise<boolean>;
  
  // Skill methods
  getSkill(id: number): Promise<Skill | undefined>;
  getSkillByName(name: string): Promise<Skill | undefined>;
  getAllSkills(): Promise<Skill[]>;
  getSkillsByCategory(category: string): Promise<Skill[]>;
  createSkill(skill: InsertSkill): Promise<Skill>;
  updateSkill(id: number, skill: Partial<InsertSkill>): Promise<Skill | undefined>;
  deleteSkill(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private projects: Map<number, Project>;
  private articles: Map<number, Article>;
  private skills: Map<number, Skill>;
  
  private userIdCounter: number;
  private projectIdCounter: number;
  private articleIdCounter: number;
  private skillIdCounter: number;

  constructor() {
    this.users = new Map();
    this.projects = new Map();
    this.articles = new Map();
    this.skills = new Map();
    
    this.userIdCounter = 1;
    this.projectIdCounter = 1;
    this.articleIdCounter = 1;
    this.skillIdCounter = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = {
      id,
      name: insertUser.name,
      username: insertUser.username,
      password: insertUser.password,
      email: insertUser.email ?? null,
      bio: insertUser.bio ?? null,
      role: insertUser.role ?? "admin",
      createdAt: new Date(),
    };
    this.users.set(id, user);
    return user;
  }
  
  // Project methods
  async getProject(id: number): Promise<Project | undefined> {
    return this.projects.get(id);
  }
  
  async getProjectBySlug(slug: string): Promise<Project | undefined> {
    return Array.from(this.projects.values()).find(
      (project) => project.slug === slug,
    );
  }
  
  async getAllProjects(): Promise<Project[]> {
    return Array.from(this.projects.values());
  }
  
  async createProject(insertProject: InsertProject): Promise<Project> {
    const id = this.projectIdCounter++;
    const project: Project = {
      id,
      title: insertProject.title,
      description: insertProject.description,
      slug: insertProject.slug,
      content: insertProject.content ?? null,
      technologies: insertProject.technologies ?? null,
      iconName: insertProject.iconName ?? null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.projects.set(id, project);
    return project;
  }
  
  async updateProject(id: number, partialProject: Partial<InsertProject>): Promise<Project | undefined> {
    const existingProject = this.projects.get(id);
    if (!existingProject) {
      return undefined;
    }
    
    const updatedProject: Project = {
      ...existingProject,
      ...(partialProject.title && { title: partialProject.title }),
      ...(partialProject.description && { description: partialProject.description }),
      ...(partialProject.slug && { slug: partialProject.slug }),
      ...(partialProject.content !== undefined && { content: partialProject.content ?? null }),
      ...(partialProject.technologies !== undefined && { technologies: partialProject.technologies ?? null }),
      ...(partialProject.iconName !== undefined && { iconName: partialProject.iconName ?? null }),
      updatedAt: new Date()
    };
    
    this.projects.set(id, updatedProject);
    return updatedProject;
  }
  
  async deleteProject(id: number): Promise<boolean> {
    return this.projects.delete(id);
  }
  
  // Article methods
  async getArticle(id: number): Promise<Article | undefined> {
    return this.articles.get(id);
  }
  
  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    return Array.from(this.articles.values()).find(
      (article) => article.slug === slug,
    );
  }
  
  async getAllArticles(): Promise<Article[]> {
    return Array.from(this.articles.values());
  }
  
  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const id = this.articleIdCounter++;
    const article: Article = {
      id,
      title: insertArticle.title,
      description: insertArticle.description,
      slug: insertArticle.slug,
      content: insertArticle.content ?? null,
      publishDate: insertArticle.publishDate ?? new Date(),
      readTime: insertArticle.readTime,
      tags: insertArticle.tags ?? null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.articles.set(id, article);
    return article;
  }
  
  async updateArticle(id: number, partialArticle: Partial<InsertArticle>): Promise<Article | undefined> {
    const existingArticle = this.articles.get(id);
    if (!existingArticle) {
      return undefined;
    }
    
    const updatedArticle: Article = {
      ...existingArticle,
      ...(partialArticle.title && { title: partialArticle.title }),
      ...(partialArticle.description && { description: partialArticle.description }),
      ...(partialArticle.slug && { slug: partialArticle.slug }),
      ...(partialArticle.content !== undefined && { content: partialArticle.content ?? null }),
      ...(partialArticle.publishDate !== undefined && { publishDate: partialArticle.publishDate ?? null }),
      ...(partialArticle.readTime !== undefined && { readTime: partialArticle.readTime }),
      ...(partialArticle.tags !== undefined && { tags: partialArticle.tags ?? null }),
      updatedAt: new Date()
    };
    
    this.articles.set(id, updatedArticle);
    return updatedArticle;
  }
  
  async deleteArticle(id: number): Promise<boolean> {
    return this.articles.delete(id);
  }
  
  // Skill methods
  async getSkill(id: number): Promise<Skill | undefined> {
    return this.skills.get(id);
  }
  
  async getSkillByName(name: string): Promise<Skill | undefined> {
    return Array.from(this.skills.values()).find(
      (skill) => skill.name === name,
    );
  }
  
  async getAllSkills(): Promise<Skill[]> {
    return Array.from(this.skills.values());
  }
  
  async getSkillsByCategory(category: string): Promise<Skill[]> {
    return Array.from(this.skills.values()).filter(
      (skill) => skill.category === category,
    );
  }
  
  async createSkill(insertSkill: InsertSkill): Promise<Skill> {
    const id = this.skillIdCounter++;
    const skill: Skill = {
      id,
      name: insertSkill.name,
      category: insertSkill.category,
      proficiency: insertSkill.proficiency,
      icon: insertSkill.icon ?? null,
      createdAt: new Date(),
    };
    this.skills.set(id, skill);
    return skill;
  }
  
  async updateSkill(id: number, partialSkill: Partial<InsertSkill>): Promise<Skill | undefined> {
    const existingSkill = this.skills.get(id);
    if (!existingSkill) {
      return undefined;
    }
    
    const updatedSkill: Skill = {
      ...existingSkill,
      ...(partialSkill.name && { name: partialSkill.name }),
      ...(partialSkill.category && { category: partialSkill.category }),
      ...(partialSkill.proficiency !== undefined && { proficiency: partialSkill.proficiency }),
      ...(partialSkill.icon !== undefined && { icon: partialSkill.icon ?? null }),
    };
    
    this.skills.set(id, updatedSkill);
    return updatedSkill;
  }
  
  async deleteSkill(id: number): Promise<boolean> {
    return this.skills.delete(id);
  }
}

/**
 * Implementação de armazenamento utilizando banco de dados PostgreSQL
 */
export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }
  
  // Project methods
  async getProject(id: number): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.id, id));
    return project;
  }
  
  async getProjectBySlug(slug: string): Promise<Project | undefined> {
    const [project] = await db.select().from(projects).where(eq(projects.slug, slug));
    return project;
  }
  
  async getAllProjects(): Promise<Project[]> {
    return db.select().from(projects);
  }
  
  async createProject(insertProject: InsertProject): Promise<Project> {
    const [project] = await db.insert(projects).values(insertProject).returning();
    return project;
  }
  
  async updateProject(id: number, partialProject: Partial<InsertProject>): Promise<Project | undefined> {
    const [updatedProject] = await db
      .update(projects)
      .set({ ...partialProject, updatedAt: new Date() })
      .where(eq(projects.id, id))
      .returning();
    return updatedProject;
  }
  
  async deleteProject(id: number): Promise<boolean> {
    const result = await db.delete(projects).where(eq(projects.id, id));
    return !!result.rowCount;
  }
  
  // Article methods
  async getArticle(id: number): Promise<Article | undefined> {
    const [article] = await db.select().from(articles).where(eq(articles.id, id));
    return article;
  }
  
  async getArticleBySlug(slug: string): Promise<Article | undefined> {
    const [article] = await db.select().from(articles).where(eq(articles.slug, slug));
    return article;
  }
  
  async getAllArticles(): Promise<Article[]> {
    return db.select().from(articles);
  }
  
  async createArticle(insertArticle: InsertArticle): Promise<Article> {
    const [article] = await db.insert(articles).values(insertArticle).returning();
    return article;
  }
  
  async updateArticle(id: number, partialArticle: Partial<InsertArticle>): Promise<Article | undefined> {
    const [updatedArticle] = await db
      .update(articles)
      .set({ ...partialArticle, updatedAt: new Date() })
      .where(eq(articles.id, id))
      .returning();
    return updatedArticle;
  }
  
  async deleteArticle(id: number): Promise<boolean> {
    const result = await db.delete(articles).where(eq(articles.id, id));
    return !!result.rowCount;
  }
  
  // Skill methods
  async getSkill(id: number): Promise<Skill | undefined> {
    const [skill] = await db.select().from(skills).where(eq(skills.id, id));
    return skill;
  }
  
  async getSkillByName(name: string): Promise<Skill | undefined> {
    const [skill] = await db.select().from(skills).where(eq(skills.name, name));
    return skill;
  }
  
  async getAllSkills(): Promise<Skill[]> {
    return db.select().from(skills);
  }
  
  async getSkillsByCategory(category: string): Promise<Skill[]> {
    return db.select().from(skills).where(eq(skills.category, category));
  }
  
  async createSkill(insertSkill: InsertSkill): Promise<Skill> {
    const [skill] = await db.insert(skills).values(insertSkill).returning();
    return skill;
  }
  
  async updateSkill(id: number, partialSkill: Partial<InsertSkill>): Promise<Skill | undefined> {
    const [updatedSkill] = await db
      .update(skills)
      .set(partialSkill)
      .where(eq(skills.id, id))
      .returning();
    return updatedSkill;
  }
  
  async deleteSkill(id: number): Promise<boolean> {
    const result = await db.delete(skills).where(eq(skills.id, id));
    return !!result.rowCount;
  }
}

// Versão estática do site - utilizamos MemStorage para facilitar hospedagem
export const storage = new MemStorage();