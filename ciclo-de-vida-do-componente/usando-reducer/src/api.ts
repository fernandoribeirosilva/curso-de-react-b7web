import { axiosInstance as axios } from "./config/axios";

class Api {
  public async getAllPost() {
    const { data } = await axios.get("/posts");
    return data;
  }

  public async addNewPost(title: string, body: string, userId: number) {
    const { data } = await axios.post("/posts", { title, body, userId });
    return data;
  }
}

export default new Api();
