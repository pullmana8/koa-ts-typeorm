/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import {getManager} from 'typeorm';
import Todo from '../entity/Todo';
import * as Koa from 'koa';

export async function todoSaveItem(ctx: Koa.Context) {
  const todoRepo = getManager().getRepository(Todo);
  /*  const todoRepo:Repository<Todo> = getRepository(Todo); */

  const newTodo = todoRepo.create(ctx.request.body);

  await todoRepo.save(newTodo);

  ctx.body ={
    data: {newTodo},
  };
};
