import * as dotenv from 'dotenv'

export const setEnv = async () => {
  await dotenv.config()
}
