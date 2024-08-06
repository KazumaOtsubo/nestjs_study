import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from '@prisma/client';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  private readonly itemsService: ItemsService;
  constructor(itemsService: ItemsService) {
    this.itemsService = itemsService;
  }
  @Get()
  async findAll(): Promise<Item[]> {
    return await this.itemsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', ParseUUIDPipe) id: string): Promise<Item> {
    return await this.itemsService.findById(id);
  }

  @Post()
  async create(
    @Body() createItemDto: CreateItemDto,
    // @Body('id') id: string,
    // @Body('name') name: string,
    // @Body('price') price: number,
    // @Body('description') description: string,
  ): Promise<Item> {
    return await this.itemsService.create(createItemDto);
  }

  @Put(':id')
  async updateStatus(@Param('id', ParseUUIDPipe) id: string) {
    return await this.itemsService.updateStatus(id);
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    await this.itemsService.delete(id);
  }
}
