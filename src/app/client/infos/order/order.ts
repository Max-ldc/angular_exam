import orderDetail from "./orderDetail";

export default interface Order {
    orderID: number;
    orderDetails: orderDetail[];
    orderState: string;
    creationDateTime: Date;
    lastModifiedDateTime: Date;
    clientID: string;
}