/* eslint-disable no-unused-vars */
/* eslint-disable require-jsdoc */
import {getManager} from 'typeorm';
import Todo from '../entity/Todo';
import * as Koa from 'koa';

export async function todoListAll(ctx: Koa.Context) {
  const todoRepo = getManager().getRepository(Todo);
  /*  const todoRepo:Repository<Todo> = getRepository(Todo); */

  const todos = await todoRepo.find();

  ctx.body ={
    data: {todos},
  };
};
