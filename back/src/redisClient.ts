import {Redis} from 'ioredis';
import { env } from './env';

export class RedisClient {
    private static instance: RedisClient;
    private client: Redis

    private constructor() {
        this.client = new Redis(env.redis);
    }

    public static getInstance(): RedisClient {
        if (!RedisClient.instance) {
            RedisClient.instance = new RedisClient();
        }
        return RedisClient.instance;
    }

    public async set(key: string, value: string): Promise<boolean> {
        return new Promise((resolve, reject) => {
            this.client.set(key, value, (err, reply) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(reply === 'OK');
                }
            });
        });
    }

    public async get(key: string): Promise<string | null> {
        return new Promise((resolve, reject) => {
            this.client.get(key, (err, reply) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(reply);
                }
            });
        });
    }

    // ... 其他操作方法 ...
}
