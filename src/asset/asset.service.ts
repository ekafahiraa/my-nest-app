import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Asset } from './asset.entity';
import { CreateAssetDto } from './dto/create-asset.dto';
import { UpdateAssetDto } from './dto/update-asset.dto';

@Injectable()
export class AssetService {
  constructor(
    @InjectRepository(Asset)
    private readonly repo: Repository<Asset>,
  ) {}

  create(createDto: CreateAssetDto) {
    const asset = this.repo.create(createDto);
    return this.repo.save(asset);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: number) {
    const asset = await this.repo.findOneBy({ asset_id: id });
    if (!asset) throw new NotFoundException('Asset not found');
    return asset;
  }

  async update(id: number, updateDto: UpdateAssetDto) {
    await this.repo.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    const result = await this.repo.delete(id);
    if (result.affected === 0) throw new NotFoundException('Asset not found');
    return { deleted: true };
  }
}
