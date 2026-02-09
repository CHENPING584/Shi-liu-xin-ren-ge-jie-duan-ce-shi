export interface QuestionOption {
  label: string;
  text: string;
  // Scores for Type Assessment (Group A: Q1-20)
  // Maps types to points. e.g. { INTJ: 2, ENTJ: 1 }
  typeScores?: { [key: string]: number };
  // Score for Level Assessment (Group B: Q21-30)
  levelScore?: number;
}

export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}
