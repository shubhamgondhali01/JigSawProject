import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConnectionConfig } from 'src/config/typeorm.config';
import { UserModule } from './user/user.module';
import { QuestionResponseModule } from './question-response/question-response.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(typeormConnectionConfig),
    UserModule,
    QuestionResponseModule,
  ],
})
export class AppModule {}
