import axios from "axios";
import { IUser } from "../models/types";

export const defaultRequest = axios.create({
  baseURL: "https://myfirstfirebase-9dcac-default-rtdb.firebaseio.com/newdiary",
});

export async function getUsers(): Promise<IUser[]> {
  const response = await defaultRequest.get("users.json");

  const users: IUser[] = Object.values(response.data);
  const newUsers = users.filter((user, i) => i !== 0);

  return newUsers;
}
