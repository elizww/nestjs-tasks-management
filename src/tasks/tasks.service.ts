import { Injectable } from '@nestjs/common';
import * as uuid from 'uuid'
import { Task, TaskStatus } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = []

    getAllTasks() {
        return this.tasks
    }

    getTaskById(id: string) : Task {
        return this.tasks.find(task => task.id === id)
    }

    createTask(createTaskDto :CreateTaskDto): Task {
        const { title, description } = createTaskDto
        const task: Task = {
            id: uuid.v1(),
            title,
            description,
            status: TaskStatus.OPEN
        }

        this.tasks.push(task)
        return task
    }
}
