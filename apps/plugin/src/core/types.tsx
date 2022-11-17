import { inject } from "./lib/inject"

export interface CoreProps{
  inject: typeof inject,
  next:()=>void,
  setState:(state:Object)=>void
}

export type Plugin = (props: CoreProps) => any