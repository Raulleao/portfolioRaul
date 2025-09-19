// src/data/projects/types.ts
export interface Context {
  background: string;
  market?: string;
  businessGoals?: string[];
}

export interface PainPoint {
  title: string;
  description: string;
  impact?: string;
}

export interface Problem {
  userPain: string;
  painPoints: PainPoint[];
}

export interface Persona {
  name: string;
  age?: number;
  profession?: string;
  image?: string;
  bio?: string;
  goals?: string[];
  frustrations?: string[];
  techLevel?: string;
  quote?: string;
}

export interface SolutionPrinciple {
  title: string;
  description?: string;
}

export interface Solution {
  approach?: string;
  keyPrinciples?: SolutionPrinciple[];
  designDecisions?: string[];
}

export interface Prototype {
  id: string;
  title: string;
  description?: string;
  image?: string;
}

export interface ProcessPhase {
  phase: string;
  duration?: string;
  description?: string;
  activities?: string[];
  deliverables?: string[];
  insights?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image?: string;
  category?: string;
  year?: string;
  duration?: string;
  team?: string;
  role?: string;
  client?: string;
  overview?: string;
  context?: Context;
  problem?: Problem;
  personas?: Persona[];
  solution?: Solution;
  prototypes?: Prototype[];
  impact?: string[];
  technologies?: string[];
  process?: ProcessPhase[];
}
