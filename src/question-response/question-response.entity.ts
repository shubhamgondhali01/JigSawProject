import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum DifficultyLevel {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

@Entity()
export class QuestionResponse {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  skillId: number;

  @Column({
    type: 'enum',
    enum: DifficultyLevel,
  })
  difficultyLevel: DifficultyLevel;

  @Column()
  question: string;

  @Column({ nullable: true })
  response: string;

  @Column({ nullable: true })
  rating: number;
}
