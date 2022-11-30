import fs from "fs"

import context from "../../src/context"
import configuration from '@feathersjs/configuration'

const config = configuration()()

export interface BuildDb{
  force : boolean
}
import path from 'path'

import os  from 'os'



 

export const buildDb = async ({ force }: BuildDb) => {
  console.log(process.env.NODE_ENV)
  const targetPath=process.env.NODE_ENV?.toLowerCase() == 'production'
    ? path.join(os.homedir(),config.db)
    : path.join(config.db)
  
  if (process.env.NODE_ENV == 'test' || force) {
    console.log(`db created on ${targetPath}`)
    await context.sync({ force: true })
    return
  }
    
  if (!fs.existsSync(targetPath)) {
    console.log(`db created on ${targetPath}`)
    await context.sync({ force: true }) 
    return
  }
}


