// Imports: Node Fetch
const fetch = require('node-fetch');

// Imports: API Key
import APIKEY from '/Users/jefflewis/Documents/Computer-Programming/Projects/Wrapped GraphQL REST APIs/open311-rest-api-to-graphql/config/config.js'


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    getServices: async (parent, args) => {
      const response = await
      fetch(`http://311.baltimorecity.gov/open311/v2/services.json`);
      return response.json();
    }
  }
};

// Exports
export default RESOLVERS;