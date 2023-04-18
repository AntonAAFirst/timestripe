import Cookies from "js-cookie";
import { defaultRequest, getUsers } from ".";
import { getRandomBigInt } from "../helpers";
import { IUser, cookieUserId } from "../models/types";

export async function addUserToFirebase(name: string, passsword: string) {
  const userId = getRandomBigInt();

  Cookies.set(cookieUserId, userId.toString());

  let users = await getUsers();

  users.push({
    name: name,
    password: passsword,
    notes: [{ name: name, id: userId, password: passsword, notes: [0] }],
    id: userId,
  });

  await defaultRequest.put("users.json", users);
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
