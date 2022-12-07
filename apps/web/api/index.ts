import  feathers from '@feathersjs/feathers';
const rest = require('@feathersjs/rest-client');

export const api = ():feathers.Application<any> => {
  const api = feathers();
  // Connect to a different URL
const restClient = rest('http://localhost:3030/api/v1')
  api.configure(restClient.fetch(window?.fetch?.bind(window)));
  return api
}




// Connect to the `http://feathers-api.com/messages` service

