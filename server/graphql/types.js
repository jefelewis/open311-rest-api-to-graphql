// GraphQL: TypeDefs
const TYPEDEFS = `
  type Query {
    getServices: [Service]
  }

  type Service {
    service_code: String
    service_name: String
    metadata: Boolean
    type: String
    group: String
  }
`;


// Exports
export default TYPEDEFS;