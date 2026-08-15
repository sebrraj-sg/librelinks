import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/node";

export default toNodeHandler(auth);