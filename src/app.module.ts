import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetService } from './asset/asset.service';
import { AssetModule } from './asset.module';
import { Asset } from './asset/asset.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'asset_fumindo',
      entities: [Asset],
      synchronize: true,
    }),
    AssetModule,
  ],
})
export class AppModule {}
