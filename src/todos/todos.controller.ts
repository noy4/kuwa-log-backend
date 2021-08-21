import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { ApiOkResponse } from '@nestjs/swagger'
import { CreateTodoDto } from 'src/todos/entities/todo.dto'
import { Todo } from './entities/todo.schema'
import { TodosService } from './todos.service'

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Post()
  @ApiOkResponse({ type: Todo })
  async create(@Body() todo: CreateTodoDto) {
    return this.todosService.create(todo)
  }

  @Get()
  @ApiOkResponse({ type: [Todo] })
  async findAll() {
    return this.todosService.findAll()
  }

  @Get(':id')
  @ApiOkResponse({ type: Todo })
  async findById(@Param('id') id: string) {
    return this.todosService.findById(id)
  }

  @Patch()
  @ApiOkResponse({ type: Todo })
  async update(@Body() todo: Todo) {
    return this.todosService.update(todo)
  }

  @Delete()
  async deleteAll() {
    return this.todosService.deleteAll()
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.todosService.delete(id)
  }
}
