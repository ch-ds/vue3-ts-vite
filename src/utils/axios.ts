import router from "@/router";
import axios from "axios";
import { ElMessage } from "element-plus";
import "element-plus/es/components/message/style/css";

const server = axios.create({
  baseURL: "http://backend-api-02.newbee.ltd/manage-api/v1",
  timeout: 6000,
});

/* server.interceptors.request.use(req => {
  return req;
}) */

server.interceptors.response.use((res) => {
  const data = res.data;
  if (data.resultCode !== 200) {
    if (data.message) {
      ElMessage({
        message: data.message,
        type: "error",
      });
    }
    if (data.resultCode == 491) {
      router.push({ path: "/login" });
    }
    return Promise.reject(res);
  }
  return res.data;
});

export default server;
