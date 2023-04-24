import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity({schema: "HSDC" , name: "WITHHOLDING_FARE"})
export class FareBasicInfo {
  @PrimaryGeneratedColumn({name : "ID"})
  id: number;

  @Column({ name: "FARE_BASIC_INFO_ID" })
  basicInfoId: number;

  @Column({name : "FARE_ITEM"})
  fareItem: number;

  @Column({name : "FARE_NAME"})
  fareName: string;

  @Column({name : "TRADE_DIRECTION"})
  tradeDirection: number;

  @Column({name : "CHARGE_MODE"})
  chargeMode: number;

  @Column({name : "FARE_RATE"})
  fareRate: number;

  @Column({name : "MIN_FARE"})
  minRate: number;

  @Column({name : "MAX_FARE"})
  maxRate: number;

  @Column({name : "PRECISION_NUM"})
  precisionNum: number;

  @Column({name : "ROUND_TYPE"})
  roundType: number;

  @Column({name : "BRANCH_CODE"})
  branchaCode: number;

  @Column({name : "PRIORITY"})
  priority: number;

  @Column({name : "FARE_LEVEL"})
  fareLevel: number;

  @Column({name : "DELETE_FLAG"})
  deleteFlag: number;

  @Column({name : "FLAG_BIT"})
  flagBit: number;

  @Column({name : "FEATURES"})
  features: string;

  @Column({name : "CREATE_TIME"})
  createTime: Date

  @Column({name : "UPDATE_TIME"})
  updateTime: Date

}