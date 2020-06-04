import * as bodyParser from 'koa-bodyparser';
import {createConnection} from 'typeorm';
import Router = require('koa-router');
import {AppRoutes} from './routes';
import 'reflect-metadata';
import * as Koa from 'koa';


/* createConnection().then(async (connection) => {
  console.log('Inserting a new user into the database...');
  const user = new User();
  user.firstName = 'Timber';
  user.lastName = 'Saw';
  user.age = 25;
  await connection.manager.save(user);
  console.log('Saved a new user with id: ' + user.id);

  console.log('Loading users from the database...');
  const users = await connection.manager.find(User);
  console.log('Loaded users: ', users);

  console.log('Here you can setup and run express/koa/any other framework.');
}).catch((error) => console.log(error));
*/

createConnection().then(async (connection) => {
  const app = new Koa();
  const router = new Router();

  AppRoutes.forEach((route) => router[route.method](route.path, route.action));

  app.use(bodyParser());
  app.use(router.routes());
  app.use(router.allowedMethods());
  app.listen(3000);

  console.log('Koa app is up and running on port 3000');
}).catch((error) => console.log('TypeORM connection error: ', error));
