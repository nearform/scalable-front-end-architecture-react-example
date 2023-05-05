import { Stack } from "@chakra-ui/react";
import { If } from "../../../shared/modules/components/business/if.component";
import { RepositoriesSkeleton } from "../components/repositories-skeleton.component";
import { Repository } from "../components/repository.component";
import { Repository as RepositoryEntity } from "../repository.entity";

type TProps = {
  repositories: RepositoryEntity[];
  state: "FETCHING" | "RENDERED";
};

export const ListInterface: React.FC<TProps> = ({ repositories, state }) => (
  <If condition={state === "RENDERED"} el={<RepositoriesSkeleton />}>
    <Stack spacing={8}>
      {repositories.map((repository: RepositoryEntity) => (
        <Repository key={repository.id} repository={repository} />
      ))}
    </Stack>
  </If>
);
