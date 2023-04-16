import axios from "axios";
import { INote, IUser } from "../models/types";
import { getIntUserId } from "../helpers";

export const defaultRequest = axios.create({
  baseURL: "https://myfirstfirebase-9dcac-default-rtdb.firebaseio.com/newdiary",
});

export async function getUsers(): Promise<IUser[]> {
  const response = await defaultRequest.get("users.json");

  const users: IUser[] = Object.values(response.data);

  return users;
}

export async function addNoteToFirebase(noteObject: INote) {
  const users: IUser[] = await getUsers();

  let newNotes =
    users[users.findIndex((user) => user.id === noteObject.id)].notes;
  newNotes.push(noteObject);
  users[users.findIndex((user) => user.id === noteObject.id)].notes = newNotes;
  defaultRequest.put("/users.json", users);
}

export async function updateNotes(notes: INote[]) {
  const users: IUser[] = await getUsers();

  const userId: number = getIntUserId();

  for (let user in users) {
    if (users[user].id === userId) {
      users[user].notes = notes;
    }
  }

  defaultRequest.put("/users.json", users);
}
