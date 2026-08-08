import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

class GetUsersParamDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
export default GetUsersParamDto;
