export interface Shopping {
    id:number, 
    name: string,
    description: string,
    qty: number,
    purchased: boolean,
    createdAt?: Date;
    updatedAt?: Date;
}