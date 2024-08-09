import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

@Module({
  imports: [
  TypeOrmModule.forRoot({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'db_user_gestion',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
  }),
  UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  })
 
  export class AppModule {}
