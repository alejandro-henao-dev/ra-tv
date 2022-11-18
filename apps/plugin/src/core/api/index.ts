import { API, CoreConfig } from "../types";
import { localApi } from "./local";
import { remoteApi } from "./remote";

let apiType:CoreConfig["api"]="remote"
export const setApi = (type: CoreConfig["api"]) => {
  apiType=type
}

const APIS = {
  remote: remoteApi,
  local: localApi
}


export const Api = () => APIS[apiType]
