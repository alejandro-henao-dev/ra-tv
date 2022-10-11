import path from 'path'
import favicon from 'serve-favicon'
import compress from 'compression'
import helmet from 'helmet'
import cors from 'cors'

import feathers, { HookContext as FeathersHookContext } from '@feathersjs/feathers'
import configuration from '@feathersjs/configuration'
import express from '@feathersjs/express'

import { Application } from './declarations'
import logger from './logger'

// api imports

import middleware from './middleware'
import services from './services/index'
import hooks from './hooks/api.hooks'


export type HookContext<T = any> = { app: Application } & FeathersHookContext<T>;


// set api app
const api: Application = express(feathers())


// Load api configuration
api.configure(configuration())
api.configure(express.rest())
api.configure(middleware)
api.configure(services)
api.hooks(hooks)



// set main app
const app: Application = express(feathers())

// Load app configuration
app.configure(configuration())

// Enable security, CORS, compression, favicon and body parsing
app.use(helmet({
  contentSecurityPolicy: false
}))
app.use(cors())
app.use(compress())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(favicon(path.join(app.get('public'), 'favicon.ico')))

// Host apis
app.use('/api/v1', api)

// Host the public folder
app.use('/', express.static(app.get('public')))

// Configure a middleware for 404s and the error handler
app.use(express.notFound())
app.use(express.errorHandler({ logger } as any))

export default app
