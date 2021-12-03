import zRequest from "./request/axios";
import { BASE_URL, TIMEOUT } from "./config";

const ZRequest = new zRequest({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

export default ZRequest;
