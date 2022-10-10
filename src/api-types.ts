import { AxiosRequestConfig } from "axios";

type APIEndpointConfig = Omit<
    AxiosRequestConfig, 
    "method" | "data" | "params"
>;

export type Payload = {
  [key: string]: unknown;
};

export type DataPayload = {
  data: Payload;
};

type OptionalDataPayload = Partial<DataPayload>; // DELETE requests can send an optional data object

export interface GetApiEndpoint extends APIEndpointConfig {
  method: "GET" | 'get';
  params?: Payload;
}

export interface PostApiEndpoint extends APIEndpointConfig, DataPayload {
  method: "POST" | 'post';
}

export interface PatchApiEndpoint extends APIEndpointConfig, DataPayload {
  method: "PATCH" | 'patch';
}

export interface PutApiEndpoint extends APIEndpointConfig, DataPayload {
  method: "PUT" | 'put';
}

export interface DeleteApiEndpoint extends APIEndpointConfig, OptionalDataPayload {
  method: "DELETE" | 'delete';
}

type APIEndpoint =
  | GetApiEndpoint
  | PostApiEndpoint
  | PutApiEndpoint
  | PatchApiEndpoint
  | DeleteApiEndpoint;


export default APIEndpoint;
