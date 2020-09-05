import {
  Controller,
  Get,
  Req,
  Post,
  HttpCode,
  Redirect,
  Param,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('cats')
export class CatsController {
  @Get()
  findAll(@Req() request: Request): string {
    console.log(request);
    return 'all cats';
  }

  @Post()
  @HttpCode(200)
  create(): string {
    return 'create cats';
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return params.id;
  }
}
