import * as crypto from "crypto";
import { render, screen } from "@testing-library/react";

import { ListInterface } from "../list.interface";
import { Repository } from "../../repository.entity";

describe("Tests for repositories/list.interface", () => {
  it("Should render without crash when all required props are provided", async () => {
    render(
      <ListInterface
        repositories={[
          new Repository({
            createdAt: new Date().toISOString(),
            description: "Testing...",
            id: crypto.randomUUID(),
            name: "Test",
            owner: {
              login: "tst",
            },
            stargazerCount: 1,
            url: "http://localhost:8080",
          }),
        ]}
        state="RENDERED"
      />
    );

    expect(await screen.findByText("tst/Test")).toBeInTheDocument();
    expect(await screen.findByText("Testing...")).toBeInTheDocument();
  });
});
