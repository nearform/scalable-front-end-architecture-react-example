import { env } from "../env";

export class AuthUtils {
  public static createHeaders() {
    return {
      Authorization: `bearer ${env.api.token}`,
    };
  }
}
