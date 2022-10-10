import axios from "axios";

export default axios.create({
  // base url of your app backend e.g http://localhost:3000/api
  baseURL: "http://localhost:3000",
  headers: {
    "content-type": "application/json"
  }
});
