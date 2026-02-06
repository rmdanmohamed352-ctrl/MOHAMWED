
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}

// Added missing interface for individual learning modules
export interface LearningModule {
  id: string;
  title: string;
  duration: string;
  description: string;
  topics: string[];
}

// Added missing interface for the curriculum structure
export interface Curriculum {
  title: string;
  level: string;
  summary: string;
  modules: LearningModule[];
}

// Added missing interface for search grounding sources
export interface GroundingSource {
  uri: string;
  title: string;
}
