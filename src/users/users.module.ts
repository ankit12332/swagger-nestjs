import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Module } from '@nestjs/common';
import { Users } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    controllers: [
        UsersController, ],
    providers: [
        UsersService, ],
})
export class UsersModule {}
