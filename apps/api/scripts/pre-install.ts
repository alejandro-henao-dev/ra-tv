import configuration from '@feathersjs/configuration'
import { buildDb, BuildDb } from "./functions/build-database"


const args = process.argv.slice(2);

const force = args.includes('-f')


const config = configuration()()


interface Props extends BuildDb{
  
}


export const preInstall = async (props:Props) => {
  await buildDb({force:props.force})
}

preInstall({
  force
})