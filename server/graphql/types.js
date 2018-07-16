// GraphQL: TypeDefs
const TYPEDEFS = `
  type Query {
    getBaltimoreServices: [Service]
    getChicagoServices: [Service]
    getBloomingtonServices: [Service]
    getBostonServices: [Service]
    getBrooklineServices: [Service]
    getGrandRapidsServices: [Service]
    getPeoriaServices: [Service]
    getSanFranciscoServices: [Service]
    getWashingtonDCServices: [Service]
  }

  type Service {
    service_code: String
    service_name: String
    description: String
    metadata: Boolean
    type: String
    keywords: String
    group: String
  }

  type ServiceDefinition {
    service_code: String
    variable: Boolean
    code: String
    datatype: String
    required: Boolean
    datatype_description: String
    order: String
    description: String
    key: String
    name: String
  }
`;


// Exports
export default TYPEDEFS;