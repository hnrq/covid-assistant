import { atom, selector } from "recoil";
import axios from "axios";

export default atom({
  key: "sessionId",
  default: selector({
    key: "getSessionIdDefault",
    async get() {
      const response = await axios.get("/api/session", {});
      return response.data.result.session_id;
    },
  }),
});
