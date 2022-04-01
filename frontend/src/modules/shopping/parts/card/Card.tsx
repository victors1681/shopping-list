import React from "react";

interface CardProps {
    id: number, 
    name: string,
    description: string, 
    purchased: boolean,
    handleEdit: (id: number) => {}
    handleDelete: (id: number) => {}
}

export const Card: React.FC<CardProps>= ({id, name, description, purchased, handleEdit, handleDelete}): JSX.Element => {

    return <div>Card component </div>
}

export default Card;
