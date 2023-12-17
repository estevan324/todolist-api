import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskDto } from './dto/task.dto';
import { TaskNotFoundException } from './exceptions/task-not-found.exception';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  async findAll(): Promise<TaskDto[]> {
    return this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<TaskDto> {
    const task = await this.tasksService.findOne(id);

    if (!task) throw new TaskNotFoundException();

    return task;
  }

  @Post()
  async create(@Body() task: TaskDto): Promise<TaskDto> {
    return this.tasksService.create(task);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() task: TaskDto,
  ): Promise<TaskDto> {
    return this.tasksService.update(id, task);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.tasksService.delete(id);
  }
}
