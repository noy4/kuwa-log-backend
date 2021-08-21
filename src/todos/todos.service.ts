import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreateTodoDto } from 'src/todos/entities/todo.dto'
import { Todo, TodoDocument } from './entities/todo.schema'

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private readonly todoModel: Model<TodoDocument>) {}

  async create(todo: CreateTodoDto): Promise<Todo> {
    const createdTodo = new this.todoModel(todo)
    return createdTodo.save()
  }

  async findAll(): Promise<Todo[]> {
    return this.todoModel.find().sort({ _id: 'desc' }).exec()
  }

  async findById(id: string): Promise<Todo> {
    const data = await this.todoModel.findById(id).exec()
    if (!data) throw new NotFoundException(`todo.id: ${id}`)
    return data
  }

  async update(todo: Todo) {
    const data = await this.todoModel.updateOne({ _id: todo.id }, todo)
    // const data = await this.todoModel.findByIdAndUpdate(todo.id, todo)
    return data
  }

  async deleteAll() {
    return this.todoModel.deleteMany()
  }

  async delete(id: string) {
    const data = await this.todoModel.deleteOne({ _id: id }).exec()
    return data
  }
}
