import { 
    DeleteApiEndpoint, 
    GetApiEndpoint, 
    PostApiEndpoint,
    Payload
  } from "../api-types";
  
  export const LIST_INNOVATORS: GetApiEndpoint = {
    method: 'get',
    url: '/data'
  }
  
  export const ADD_INNOVATORS = (data: Payload) => {
    const endpoint: PostApiEndpoint = {
      method: "POST",
      url: '/data',
      data
    }
  
    return endpoint;
  };
  
  
  export const DELETE_INNOVATOR = (id: number) =>  {
    const endpoint: DeleteApiEndpoint = {
      url: `/data/${id}`,
      method: 'delete'
    }
    
    return endpoint
  }