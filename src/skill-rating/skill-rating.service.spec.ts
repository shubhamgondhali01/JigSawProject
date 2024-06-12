import { Test, TestingModule } from '@nestjs/testing';
import { SkillRatingService } from './skill-rating.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { QuestionResponse } from '../question-response/question-response.entity';

describe('SkillRatingService', () => {
  let service: SkillRatingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SkillRatingService,
        {
          provide: getRepositoryToken(QuestionResponse),
          useValue: {
            find: jest.fn().mockResolvedValue([
              { id: 1, skillId: 1, difficultyLevel: 'easy', rating: 5 },
              { id: 2, skillId: 1, difficultyLevel: 'easy', rating: 4 },
              { id: 3, skillId: 1, difficultyLevel: 'medium', rating: 4 },
            ]),
          },
        },
      ],
    }).compile();

    service = module.get<SkillRatingService>(SkillRatingService);
  });

  it('should calculate aggregate skills and ratings', async () => {
    const result = await service.getAggregateSkills();
    expect(result).toEqual([{ skillId: 1, rating: 4.3 }]);
  });
});
