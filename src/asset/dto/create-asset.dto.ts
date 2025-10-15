import { IsString, IsInt, IsIn, Min } from 'class-validator';

export class CreateAssetDto {
  @IsString()
  asset_name: string;

  @IsInt()
  @Min(0)
  stock_quantity: string;

  @IsString()
  @IsIn(['Consumable', 'Non-Consumable'])
  category: 'Consumable' | 'Non-Consumable';
}
