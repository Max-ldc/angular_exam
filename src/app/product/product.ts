export default interface Product {
    productID: number;
    name: string;
    productType: string;
    unitPrice: number;
    description?: string;
    stockpiled: number;
}