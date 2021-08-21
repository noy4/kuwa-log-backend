import { Test, TestingModule } from '@nestjs/testing'
import { TestModules, TestService } from '~/test-service/test.service'
import { TodosService } from './todos.service'

describe('TodosService', () => {
  let todosService: TodosService
  let testService: TestService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...TestModules],
      providers: [TodosService, TestService],
    }).compile()

    todosService = module.get(TodosService)
    testService = module.get(TestService)

    await testService.deleteAll()
  })

  it('should be defined', () => {
    expect(todosService).toBeDefined()
  })

  // describe('#create', () => {
  //   it('should create a todo',()=>{

  //   })
  // })
})
