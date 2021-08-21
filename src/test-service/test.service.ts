import { Injectable } from '@nestjs/common'
import { InjectModel, MongooseModule } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Todo, TodoDocument, TodoSchema } from 'src/todos/entities/todo.schema'

@Injectable()
export class TestService {
  constructor(@InjectModel(Todo.name) private readonly todoModel: Model<TodoDocument>) {}

  async deleteAll() {
    await this.todoModel.deleteMany()
  }
}

export const TestModules = [
  MongooseModule.forRoot('mongodb+srv://user:useruser@cluster0.dqsiv.mongodb.net/testdesu?retryWrites=true&w=majority'),
  MongooseModule.forFeature([{ name: Todo.name, schema: TodoSchema }]),
]
