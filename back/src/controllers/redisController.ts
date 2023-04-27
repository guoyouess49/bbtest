import { RedisClient } from "../redisClient";
import { Context } from 'koa';

class RedisController {
    redisClient : RedisClient = RedisClient.getInstance() 

    async set(ctx: Context) {
        const requests = ctx.requestBody
        
        const user = await this.redisClient.set(requests.k, requests.v);
        if (user) {
          ctx.body = {message: "设置" + requests.k + "成功"};
        } else {
          ctx.status = 404;
          ctx.body = { message: '设置' + requests.k + '失败' };
        }
      }

      async get(ctx: Context) {
        const redisKey = ctx.params.id
        const v = await this.redisClient.get(redisKey);
        if (v) {
          ctx.body = v;
        } else {
          ctx.status = 404;
          ctx.body = { message: redisKey + ': isn\'t exist' };
        }
      }
    
}

export default new RedisController();