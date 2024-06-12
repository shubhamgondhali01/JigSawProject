import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConnectionConfig } from './config/typeorm.config';
import { UserModule } from './user/user.module';
import { QuestionResponseModule } from './question-response/question-response.module';
import { SkillRatingModule } from './skill-rating/skill-rating.module'; // Add this import

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConnectionConfig),
    UserModule,
    QuestionResponseModule,
    SkillRatingModule, // Add this module
  ],
})
export class AppModule {}
