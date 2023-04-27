import "reflect-metadata";
import * as Koa from "koa";
import * as cors from 'koa-cors'
import * as bodyParser from "koa-bodyparser";
import { AppDataSource } from "./database"
import { router as fareRouter} from "./routes/fareBasicInfo.route";
import { router as redisRouter } from "./routes/redisUtil.route";

AppDataSource.initialize()
    .then(() => {
    console.log("hhhhhhhhhhhhhhhhhhhhhhhh")
    const app = new Koa();
    app.use(cors());
    app.use(bodyParser());

    app.use(fareRouter.routes());
    app.use(redisRouter.routes());
    

    app.listen(3000);

    console.log("Koa application is up and running on port 3000");
    })
    .catch((error) => console.log(error))

export { AppDataSource }