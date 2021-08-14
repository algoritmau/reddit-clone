import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constants'
import { Post } from './entities/Post'
import mikroOrmConfig from './mikro-orm.config'

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig)
  await orm.getMigrator().up()

  const post = orm.em.create(Post, { title: 'My first Post' })

  // const posts = await orm.em.find(Post, {})
  console.log(post)
}

main().catch((err) => console.error(err))
