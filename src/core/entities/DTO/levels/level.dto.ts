import { ExerciceDto } from "./excerice.dto";

export class LevelDto {
    levelId: number;
    name: string;
    description: string;
    nextLevelId: number;
    exercices: ExerciceDto[] = [];
  }