import { OmitType } from '@nestjs/swagger'
import { Todo } from 'src/todos/entities/todo.schema'

export class CreateTodoDto extends OmitType(Todo, ['id'] as const) {}
