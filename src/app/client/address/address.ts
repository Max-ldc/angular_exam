export default interface Address {
    addressID?: string;
    streetLine1: string;
    streetLine2?: string;
    zipCode: number;
    city: string;
    phone: string;
    countryID: number;
    clientID: string;
}