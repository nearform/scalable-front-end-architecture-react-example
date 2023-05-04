import { Card } from "../../../shared/modules/components/ui/card.component";
import { Repository as RepositoryEntity } from "../repository.entity";

type TProps = {
  repository: RepositoryEntity;
};

export const Repository: React.FC<TProps> = ({ repository }) => (
  <Card
    description={repository.description || ""}
    id={repository.id}
    onClick={() => window.open(repository.url)}
    stars={repository.stars}
    title={repository.getFullName()}
  />
);
