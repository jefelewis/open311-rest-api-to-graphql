// Imports: Node Fetch
const fetch = require('node-fetch');

// Imports: API Key
// import APIKEY from '/Users/jefflewis/Documents/Computer-Programming/Projects/Converted GraphQL REST APIs/open311-rest-api-to-graphql/config/config.js'


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    getBaltimoreServices: async (parent, args) => {
      const response = await
      fetch(`http://311.baltimorecity.gov/open311/v2/services.json`);
      return response.json();
    },
    getChicagoServices: async (parent, args) => {
      const response = await
      fetch(`http://311api.cityofchicago.org/open311/v2/services.json`);
      return response.json();
    },
    getBloomingtonServices: async (parent, args) => {
      const response = await
      fetch(`https://bloomington.in.gov/crm/open311/v2/services.json`);
      return response.json();
    },
    getBostonServices: async (parent, args) => {
      const response = await
      fetch(`https://mayors24.cityofboston.gov/open311/v2/services.json`);
      return response.json();
    },
    getBrooklineServices: async (parent, args) => {
      const response = await
      fetch(`http://spot.brooklinema.gov/open311/v2/services.json`);
      return response.json();
    },
    // getColumbusServices: async (parent, args) => {
    //   const response = await
    //   fetch(``);
    //   return response.json();
    // },
    // getGrandRapidsServices: async (parent, args) => {
    //   const response = await
    //   fetch(``);
    //   return response.json();
    // },
    getPeoriaServices: async (parent, args) => {
      const response = await
      fetch(`https://ureport.peoriagov.org/crm/open311/v2/services.json`);
      return response.json();
    },
    getSanFranciscoServices: async (parent, args) => {
      const response = await
      fetch(`http://mobile311.sfgov.org/open311/v2/services.json`);
      return response.json();
    },
    // getWashingtonDCServices: async (parent, args) => {
    //   const response = await
    //   fetch(``);
    //   return response.json();
    // }
  }
};

// Exports
export default RESOLVERS;