import * as Router from 'koa-router';
import redisController from '../controllers/redisController';


const router: any = new Router({
    prefix: '/redis',
  });

// 中间件：打印请求信息
router.use(async (ctx, next) => {
  console.log(`${ctx.method} ${ctx.url}`);
  await next();
});

// 路由：查询所有用户
router.get('/get', redisController.get);

// 路由：查询单个用户
router.post('/set', redisController.set);


export  {router};