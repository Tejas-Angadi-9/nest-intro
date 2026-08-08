import { PartialType } from '@nestjs/mapped-types';
import CreateUserDto from './create-user.dto';

class PatchUserDto extends PartialType(CreateUserDto) {}
export default PatchUserDto;
