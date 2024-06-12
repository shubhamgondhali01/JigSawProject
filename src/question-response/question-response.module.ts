import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionResponse } from './question-response.entity';
import { QuestionResponseService } from './question-response.service';
import { QuestionResponseController } from './question-response.controller';

@Module({
  imports: [TypeOrmModule.forFeature([QuestionResponse])],
  providers: [QuestionResponseService],
  controllers: [QuestionResponseController],
})
export class QuestionResponseModule {}
