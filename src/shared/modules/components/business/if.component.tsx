type TProps = {
  children: React.ReactNode;
  condition: boolean;
  el: React.ReactNode;
};

export const If: React.FC<TProps> = ({ children, condition, el }) => {
  if (condition) {
    return <>{children}</>;
  }
  return <>{el}</>;
};
