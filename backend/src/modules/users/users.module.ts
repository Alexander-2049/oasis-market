import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/database/prisma.module';
import { UsersRepository } from './users.repository';

@Module({
  imports: [PrismaModule],
  providers: [UsersRepository],
})
export class UsersModule {}
