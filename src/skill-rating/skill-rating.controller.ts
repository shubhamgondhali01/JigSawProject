import { Controller, Get } from '@nestjs/common';
import { SkillRatingService } from './skill-rating.service';

@Controller('skill-rating')
export class SkillRatingController {
  constructor(private readonly skillRatingService: SkillRatingService) {}

  @Get('/aggregate')
  async getAggregateSkills() {
    return this.skillRatingService.getAggregateSkills();
  }
}
