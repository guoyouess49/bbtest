import { DataSourceOptions, DataSource } from 'typeorm';
import * as Oracledb from 'oracledb';
import { env } from './env'

const oracleConfig: DataSourceOptions = {
  type: 'oracle',
  host: env.oracle.host,
  port: env.oracle.port,
  username: env.oracle.username,
  password: env.oracle.password,
  sid: env.oracle.sid,
  synchronize: false, // 设置为true，表示每次应用启动时将自动同步数据库结构
  logging: false, // 设置为true，表示输出SQL语句日志
  entities: ['src/entities/**/*.ts'], // 设置实体类所在的路径
  driver: Oracledb.Driver, // 指定使用oracledb驱动
  extra: {
    poolMin: 2, // 连接池最小连接数
    poolMax: 10, // 连接池最大连接数
    poolIncrement: 2, // 连接池每次增加连接数
    poolTimeout: 10, // 连接池连接超时时间（单位：秒）
    queueTimeout: 60000, // 等待队列请求超时时间（单位：毫秒）
    enableStats: false, // 是否开启性能统计
  },

};

const AppDataSource = new DataSource(oracleConfig)

export {AppDataSource}

