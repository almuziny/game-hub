import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "63ba4c113dee4e859a4465038b5e9bd5",
  },
});
