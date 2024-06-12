import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuestionResponse } from '../question-response/question-response.entity';

@Injectable()
export class SkillRatingService {
  constructor(
    @InjectRepository(QuestionResponse)
    private readonly questionResponseRepository: Repository<QuestionResponse>,
  ) {}

  async getAggregateSkills(): Promise<any[]> {
    const responses = await this.questionResponseRepository.find();
    const skillRatingsMap = new Map<number, { total: number, weightedSum: number }>();

    responses.forEach(response => {
      const { skillId, difficultyLevel, rating } = response;
      const weight = this.getDifficultyWeight(difficultyLevel);

      if (!skillRatingsMap.has(skillId)) {
        skillRatingsMap.set(skillId, { total: 0, weightedSum: 0 });
      }

      const skillRating = skillRatingsMap.get(skillId);
      skillRating.total += weight;
      skillRating.weightedSum += weight * rating;
    });

    const aggregatedSkills = [];
    skillRatingsMap.forEach((value, key) => {
      const rating = value.weightedSum / value.total;
      aggregatedSkills.push({ skillId: key, rating });
    });

    return aggregatedSkills;
  }

  private getDifficultyWeight(difficultyLevel: string): number {
    switch (difficultyLevel) {
      case 'easy':
        return 1;
      case 'medium':
        return 2;
      case 'hard':
        return 3;
      default:
        return 1; // Default to easy if difficulty level is unknown
    }
  }
}
