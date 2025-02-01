import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateAuthorDto {
    @IsString()
    @IsOptional()
    name: string;

    @IsOptional()
    @IsString()
    detail: string;
}
