import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssetService } from './asset/asset.service';
import { AssetController } from './asset.controller';
import { Asset } from './asset/asset.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Asset])],
  controllers: [AssetController],
  providers: [AssetService],
})
export class AssetModule {}
