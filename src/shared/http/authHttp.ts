import Cookies from "js-cookie";
import { defaultRequest, getUsers } from ".";
import { getRandomBigInt } from "../helpers";
import { IUser, cookieUserId } from "../models/types";

export function addUserToFirebase(name: string, passsword: string) {
  const userId = getRandomBigInt();

  Cookies.set(cookieUserId, userId.toString());

  defaultRequest.post("users.json", {
    name: name,
    password: passsword,
    notes: [{ name: "nothing", id: 14 }],
    id: userId,
  });
}

export async function isLoginDataCorrect(
  name: string,
  password: string
): Promise<boolean> {
  const users: IUser[] = await getUsers();

  let answer = false;

  for (let user in users) {
    if (users[user].name === name && users[user].password === password) {
      answer = true;
      Cookies.set(cookieUserId, users[user].id.toString());
    }
  }

  return answer;
}
