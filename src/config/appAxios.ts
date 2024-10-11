import axios from 'axios'
const appAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});
export default  appAxios