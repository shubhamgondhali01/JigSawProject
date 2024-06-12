import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { QuestionResponseService } from './question-response.service';
import { QuestionResponse } from './question-response.entity';

@Controller('question-responses')
export class QuestionResponseController {
  constructor(private readonly questionResponseService: QuestionResponseService) {}

  @Post()
  create(@Body() questionResponse: QuestionResponse): Promise<QuestionResponse> {
    return this.questionResponseService.create(questionResponse);
  }

  @Get()
  findAll(): Promise<QuestionResponse[]> {
    return this.questionResponseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<QuestionResponse> {
    return this.questionResponseService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() questionResponse: QuestionResponse): Promise<QuestionResponse> {
    return this.questionResponseService.update(+id, questionResponse);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.questionResponseService.remove(+id);
  }
}
