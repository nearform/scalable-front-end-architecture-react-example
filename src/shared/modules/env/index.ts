import { development } from "./development.env";
import { production } from "./production.env";
import { TEnv } from "./env.type";

export const env: TEnv =
  process.env.NODE_ENV === "development" ? development : production;
