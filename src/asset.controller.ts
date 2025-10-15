import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { AssetService } from './asset/asset.service';
import { CreateAssetDto } from './asset/dto/create-asset.dto';
import { UpdateAssetDto } from './asset/dto/update-asset.dto';

@Controller('assets')
export class AssetController {
  constructor(private readonly assetService: AssetService) {}

  @Post()
  create(@Body() createDto: CreateAssetDto) {
    return this.assetService.create(createDto);
  }

  @Get()
  findAll() {
    return this.assetService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.assetService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateDto: UpdateAssetDto) {
    return this.assetService.update(Number(id), updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.assetService.remove(Number(id));
  }
}
