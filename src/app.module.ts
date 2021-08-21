import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { TodosModule } from './todos/todos.mudule'
import { DogsModule } from './dogs/dogs.module'

@Module({
  imports: [
    MongooseModule.forRoot(
      // 'mongodb+srv://user:useruser@cluster0.dqsiv.mongodb.net/brandNewDB?retryWrites=true&w=majority'
      'mongodb+srv://user:useruser@cluster0.dqsiv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
      // 'mongodb://localhost/nest'
    ),
    TodosModule,
    DogsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
