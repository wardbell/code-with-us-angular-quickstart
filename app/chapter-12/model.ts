export class Customer {
  id: number;
  name: string;
  address: Address;
}

// Todo: put in own file
export class Address {
  street: string;
  city: string;
  state: string;
  region: string;
}
