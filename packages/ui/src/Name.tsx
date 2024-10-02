import { ReactNode } from "react";


interface NameProps {
    children: ReactNode;
    // onClick: () => void;
  }
export const Name = ({children}:NameProps) =>{

    return <div className="font-bold pt-5">
       Welcome  {children}
    </div>
}