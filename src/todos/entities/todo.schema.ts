import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import * as mongoose from 'mongoose'
import { ApiProperty } from '@nestjs/swagger'

export type TodoDocument = Todo & Document

@Schema()
export class Todo {
  @Prop()
  @ApiProperty()
  id: string

  @Prop()
  @ApiProperty()
  title: string

  @Prop()
  @ApiProperty()
  done: boolean

  @Prop([String])
  @ApiProperty()
  tags: string[]

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Todo' })
  @ApiProperty({ required: false })
  parent: Todo
}

const transform = (_: any, ret: any) => {
  ret.id = ret._id
  delete ret._id
  return ret
}

export const TodoSchema = SchemaFactory.createForClass(Todo)
  .set('toObject', {
    versionKey: false,
    transform,
  })
  .set('toJSON', {
    versionKey: false,
    transform,
  })
