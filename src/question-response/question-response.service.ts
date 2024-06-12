import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuestionResponse } from './question-response.entity';

@Injectable()
export class QuestionResponseService {
  constructor(
    @InjectRepository(QuestionResponse)
    private readonly questionResponseRepository: Repository<QuestionResponse>,
  ) {}

  create(questionResponse: QuestionResponse): Promise<QuestionResponse> {
    return this.questionResponseRepository.save(questionResponse);
  }

  findAll(): Promise<QuestionResponse[]> {
    return this.questionResponseRepository.find();
  }

  findOne(id: number): Promise<QuestionResponse> {
    return this.questionResponseRepository.findOne({ where: { id } });
  }

  async update(id: number, questionResponse: QuestionResponse): Promise<QuestionResponse> {
    await this.questionResponseRepository.update(id, questionResponse);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.questionResponseRepository.delete(id);
  }
}
