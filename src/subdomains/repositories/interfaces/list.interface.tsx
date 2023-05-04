"use client";

import { Stack } from "@chakra-ui/react";
import { If } from "../../../shared/modules/components/business/if.component";
import { RepositoriesSkeleton } from "../components/repositories-skeleton.component";
import { Repository } from "../components/repository.component";
import { useGetTenRepositories } from "../hooks";
import { Repository as RepositoryEntity } from "../repository.entity";

export const ListInterface = () => {
  const { data, isFetching } = useGetTenRepositories();

  return (
    <If condition={!isFetching} el={<RepositoriesSkeleton />}>
      <Stack spacing={8}>
        {data.map((item: RepositoryEntity) => (
          <Repository key={item.id} repository={item} />
        ))}
      </Stack>
    </If>
  );
};
