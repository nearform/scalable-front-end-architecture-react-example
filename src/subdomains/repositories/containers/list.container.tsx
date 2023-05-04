import { Root } from "../../../shared/modules/infrastructure/root.infrastructure";
import { AppLayout } from "../../../shared/modules/layouts/app.layout";
import { ListInterface } from "../interfaces/list.interface";

export const ListContainer = () => (
  <Root>
    <AppLayout>
      <ListInterface />
    </AppLayout>
  </Root>
);
