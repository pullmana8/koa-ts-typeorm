import {todoListAll} from './controller/todoListAll';
import {todoListById} from './controller/todoListById';
import {todoSaveItem} from './controller/todoSaveItem';

export const AppRoutes = [
  {
    path: '/todos',
    method: 'get',
    action: todoListAll,
  },
  {
    path: '/todos/:id',
    method: 'get',
    action: todoListById,
  },
  {
    path: '/todos',
    method: 'post',
    action: todoSaveItem,
  },
];
