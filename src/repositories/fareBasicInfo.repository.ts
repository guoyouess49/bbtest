import { FareBasicInfo } from "../entities/fareBasicInfo.entity";
import { AppDataSource } from "../app";

export const fareBasicInfoRepository = AppDataSource.getRepository(FareBasicInfo).extend({
    findById(id: number) {
        return this.createQueryBuilder("fareBasicInfo")
            .where("fareBasicInfo.id = :id", { id })
            .getMany()
    },
})