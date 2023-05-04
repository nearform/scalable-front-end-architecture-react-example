import { env } from "../../shared/modules/env";

const GetFirstTenRepositories = `
  {
    user(login: "${env.api.user}") {
      repositories(first: 10) {
        nodes {
          createdAt
          description
          id
          name
          owner {
            login
          }
          stargazerCount
          url
        }
      }
    }
  }
`;

export const queries = {
  GetFirstTenRepositories,
};
