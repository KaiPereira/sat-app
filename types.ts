export interface Question {
  question: string;
  options: string[];
  answer: string;
  reasoning: string;
}

export type SetQuestionsFunction = (questions: Question[]) => void;
