import bodyParser = require('koa-bodyparser')
import Router = require('koa-router')
import logger = require('koa-logger')
import json = require('koa-json')
import Koa = require('koa')

const app = new Koa();
const router = new Router();

interface HelloRequest {
    name: string
}

/* Hello World */
router.post('/', async (ctx, next) => {
  const data = <HelloRequest>ctx.request.body;
  ctx.body = {name: data.name};
  await next();
});

router.get('/', async (ctx, next) => {
  ctx.body = {msg: 'Hello World!'};

  await next();
});

app.use(json());
app.use(logger());
app.use(bodyParser());

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Koa started');
});
