// GraphQL: TypeDefs
const TYPEDEFS = `
  type Query {
    getBaltimoreServiceList: [ServiceList]
    getBaltimoreServiceDefinitionByServiceCode (code: String): [ServiceDefinition]
    getAllBaltimoreOpenServiceRequests: [ServiceRequest]
    getAllBaltimoreClosedServiceRequests: [ServiceRequest]
  }

  type ServiceList {
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

  type ServiceRequest {
    service_request_id: String
    status: String
    status_notes: String
    service_name: String
    service_code: String
    description: String
    agency_responsible: String
    service_notice: String
    requested_datetime: String
    updated_datetime: String
    expected_datetime: String
    address: String
    address_id: String
    zipcode: String
    lat: String
    long: String
    media_url: String
  }

  type Service {
    service_code: String
    attributes: [Attribute]
  }

  type Attribute {
    variable: Boolean
    code: String
    datatype: String
    required: Boolean
    datatype_description: String
    order: Int
    description: String
    values: [Value]
  }

  type Value {
    key: Int
    name: String
  }

`;


// Exports
export default TYPEDEFS;