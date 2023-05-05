"use client";

import { withRoot } from "../../../shared/modules/infrastructure/root.infrastructure";
import { AppLayout } from "../../../shared/modules/layouts/app.layout";
import { ListInterface } from "../interfaces/list.interface";
import { useGetTenRepositories } from "../hooks";

export const ListContainer = withRoot(() => {
  const { data, isFetching } = useGetTenRepositories();

  return (
    <AppLayout>
      <ListInterface
        repositories={data}
        state={isFetching ? "FETCHING" : "RENDERED"}
      />
    </AppLayout>
  );
});
