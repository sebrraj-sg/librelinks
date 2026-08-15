import { auth } from "@/lib/auth";
import { toNodeHandler } from "better-auth/node";

const handler = toNodeHandler(auth);

export default async function authHandler(req, res) {
  return handler(req, res);
}