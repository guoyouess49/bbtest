import { fareBasicInfoRepository } from '../repositories/fareBasicInfo.repository';
import { Context } from 'koa';

class FareBasicInfoController {
    



    async all(ctx: Context) {
        ctx.body = await fareBasicInfoRepository.find();
    }
    
      async findById(ctx: Context) {
        const user = await fareBasicInfoRepository.findById(ctx.params.id);
        if (user) {
          ctx.body = user;
        } else {
          ctx.status = 404;
          ctx.body = { message: 'User not found' };
        }
      }

}

export default new FareBasicInfoController();
