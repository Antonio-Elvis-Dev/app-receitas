import axios from "axios";
//json-server --watch -d 180 --host 10.0.0.101 db.json

const api = axios.create({
  baseURL: "http:// 192.168.157.104:3000",
});

export default api;
