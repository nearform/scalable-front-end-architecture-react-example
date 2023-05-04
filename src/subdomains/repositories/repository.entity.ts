import { TNullable } from "../../shared/modules/types/nullable.type";

type TInput = {
  createdAt: string;
  description: TNullable<string>;
  id: string;
  name: string;
  owner: {
    login: string;
  };
  stargazerCount: number;
  url: string;
};

export class Repository {
  public created_at: Date
  public description: TNullable<string>
  public id: string
  public name: string
  public owner: string
  public stars: number
  public url: string

  constructor(input: TInput) {
    this.created_at = new Date(input.createdAt)
    this.description = input.description
    this.id = input.id
    this.name = input.name
    this.owner = input.owner.login
    this.stars = input.stargazerCount
    this.url = input.url
  }

  public getFullName(): string {
    return `${this.owner}/${this.name}`
  }
}
