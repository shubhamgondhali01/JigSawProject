import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SkillRatingController } from './skill-rating.controller';
import { SkillRatingService } from './skill-rating.service';
import { QuestionResponse } from '../question-response/question-response.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([QuestionResponse]), // Ensure this import is correct
  ],
  controllers: [SkillRatingController],
  providers: [SkillRatingService],
  exports: [SkillRatingService], // If needed
})
export class SkillRatingModule {}
