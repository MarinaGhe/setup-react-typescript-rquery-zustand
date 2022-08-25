import { FC, PropsWithChildren } from "react";

export {}

declare global {
  //custom react functional component with props and children
  type FCC<P={}> = FC<PropsWithChildren<P>>
}


