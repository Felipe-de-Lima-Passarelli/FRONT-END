//Tipagem correta para elementos com children
import { ReactNode } from "react";

const Component_Children = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

export default Component_Children;
