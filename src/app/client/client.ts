import Order from "./infos/order/order";
import Address from "./address/address";

export default interface Client {
    clientID: number;
    email: string;
    orders: Order[];
    addresses: Address[];
}