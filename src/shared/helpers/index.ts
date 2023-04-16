import Cookies from "js-cookie";
import { cookieUserId } from "../models/types";

export function getRandomBigInt() {
  return Math.floor(Math.random() * 1000000);
}

export function getIntUserId(): number {
  return parseInt(Cookies.get(cookieUserId) as string);
}
