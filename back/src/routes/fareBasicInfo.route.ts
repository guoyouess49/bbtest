import * as Router from 'koa-router';
import fareBasicInfoController from '../controllers/fareBasicInfo.controller';


const router: any = new Router({
    prefix: '/fare',
  });

// 中间件：打印请求信息
router.use(async (ctx, next) => {
  console.log(`${ctx.method} ${ctx.url}`);
  await next();
});

// 路由：查询所有用户
router.get('/all', fareBasicInfoController.all);

// 路由：查询单个用户
router.get('/:id', fareBasicInfoController.findById);


export  {router};