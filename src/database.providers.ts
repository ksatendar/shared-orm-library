import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Settings } from "./entities/settings.entity";

export const DatabaseProviders = TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'My-account',
    entities: [User, Settings],
    synchronize: true,
});