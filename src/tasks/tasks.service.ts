import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from '../entities/task.entity';
import { Repository } from 'typeorm';
import { TaskDto } from './dto/task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private tasksRepository: Repository<TaskEntity>,
  ) {}

  async findAll(): Promise<TaskDto[]> {
    return this.tasksRepository.find();
  }

  async findOne(id: number): Promise<TaskDto> {
    return this.tasksRepository.findOne({ where: { id } });
  }

  async create(data: TaskDto): Promise<TaskDto> {
    const task = this.tasksRepository.create(data);

    return this.tasksRepository.save(task);
  }

  async update(id: number, data: TaskDto): Promise<TaskDto> {
    await this.tasksRepository.update(id, data);

    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
