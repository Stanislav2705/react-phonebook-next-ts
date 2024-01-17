import React,{ ReactNode } from "react";
import { Block } from "./BlockPhone.styled";

interface BlockPhoneProps {
    title: string;
    children: ReactNode
}
const BlockPhone: React.FC<BlockPhoneProps> = ({title, children}) => {
    return (
        <Block>
            <h2>{title}</h2>
            {children}
        </Block>
    )
}

export default BlockPhone;