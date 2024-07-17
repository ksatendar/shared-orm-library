import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Settings } from './entities/settings.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, Settings])],
    exports: [TypeOrmModule]
})

export class DatabaseModule {}