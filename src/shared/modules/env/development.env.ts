import { TEnv } from "./env.type";

export const development: TEnv = {
  api: {
    token: String(process.env.NEXT_PUBLIC_API_TOKEN),
    url: String(process.env.NEXT_PUBLIC_API_ADDRESS),
    user: String(process.env.NEXT_PUBLIC_API_USER),
  },
};
