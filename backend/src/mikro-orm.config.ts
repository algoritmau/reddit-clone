import { Post } from './entities/Post'
import { __prod__ } from './constants'
import { MikroORM } from '@mikro-orm/core'
import path from 'path'
import { setEnv } from './env'

setEnv()

export default {
  dbName: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  type: 'postgresql',
  entities: [Post],
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/
  },
  debug: !__prod__
} as Parameters<typeof MikroORM.init>[0]
