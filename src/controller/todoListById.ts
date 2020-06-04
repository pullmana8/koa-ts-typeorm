/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import {getManager} from 'typeorm';
import Todo from '../entity/Todo';
import * as Koa from 'koa';

export async function todoListById(ctx: Koa.Context) {
  const todoRepo = getManager().getRepository(Todo);
  /*  const todoRepo:Repository<Todo> = getRepository(Todo); */

  const todo = await todoRepo.findOne((ctx as any).params.id);

  if (!todo) {
    ctx.status = 404;
    return;
  }

  ctx.post ={
    data: {todo},
  };
};
