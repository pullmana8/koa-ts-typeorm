import * as Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import * as HttpStatus from 'http-status-codes';
import todoController from './todo.controller';

const app:Koa = new Koa();

/* app.use(async (ctx:Koa.Context) => {
  ctx.body = 'Hello World';
}); */

app.use(bodyParser());
app.use(todoController.routes());
app.use(todoController.allowedMethods());

app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
  try {
    await next();
  } catch (error) {
    ctx.status = error.statusCode || error.status ||
HttpStatus.INTERNAL_SERVER_ERROR;
    error.status = ctx.status;
    ctx.body = {error};
    ctx.app.emit('error', error, ctx);
  }
});

app.on('error', console.error);

export default app;
