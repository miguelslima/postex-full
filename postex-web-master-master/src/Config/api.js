import axios from "axios";
const api = axios.create({ baseURL: "https://postex-full.herokuapp.com/" });
const ApiCep = axios.create({ baseURL: `https://viacep.com.br/ws` });
export default api;
export { ApiCep };

//https://cors-anywhere.herokuapp.com/http://104.237.10.79:5022/