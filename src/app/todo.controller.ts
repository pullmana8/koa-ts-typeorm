/* eslint-disable no-unused-vars */
import * as Koa from 'koa';
import * as Router from 'koa-router';
import todoEntity from '../entity/Todo';
import {getRepository, Repository} from 'typeorm';
import * as HttpStatus from 'http-status-codes';

const routerOpts: Router.IRouterOptions = {
  prefix: '/todos',
};

const router:Router = new Router(routerOpts);

router.get('/', async (ctx:Koa.Context) => {
  const todoRepo:Repository<todoEntity> = getRepository(todoEntity);

  const todos = await todoRepo.find();

  ctx.body = {
    data: {todos},
  };
//  ctx.body = 'GET ALL';
});

router.get('/:todo_id', async (ctx:Koa.Context) => {
  const todoRepo:Repository<todoEntity> = getRepository(todoEntity);

  const todo = await todoRepo.findOne(ctx.params.todo_id);

  if (!todo) {
    ctx.throw(HttpStatus.NOT_FOUND);
  }

  ctx.body = {
    data: {todo},
  };
//  ctx.body = 'GET SINGLE';
});

router.post('/', async (ctx:Koa.Context) => {
  const todoRepo:Repository<todoEntity> = getRepository(todoEntity);

  const todo: todoEntity = todoRepo.create(ctx.request.body);

  await todoRepo.save(todo);

  ctx.body = {
    data: {todo},
  };

//  ctx.body = 'POST';
});

router.delete('/:todo_id', async (ctx:Koa.Context) => {
  const todoRepo:Repository<todoEntity> = getRepository(todoEntity);

  const todo = await todoRepo.findOne(ctx.params.todo_id);

  if (!todo) {
    ctx.throw(HttpStatus.NOT_FOUND);
  }

  await todoRepo.delete(todo);

  ctx.status = HttpStatus.NO_CONTENT;

//  ctx.body = 'DELETE';
});

router.patch('/:todo_id', async (ctx:Koa.Context) => {
  const todoRepo:Repository<todoEntity> = getRepository(todoEntity);

  const todo = await todoRepo.findOne(ctx.params.todo_id);

  if (!todo) {
    ctx.throw(HttpStatus.NOT_FOUND);
  }

  const updatedTodo = await todoRepo.merge(todo, ctx.request.body);

  todoRepo.save(updatedTodo);

  ctx.body = {
    data: {todo: updatedTodo},
  };
//  ctx.body = 'PATCH';
});

export default router;
