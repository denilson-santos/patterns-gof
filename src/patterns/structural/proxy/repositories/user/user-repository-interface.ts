export type AddressType = {
  street: string;
  neighborhood: string;
  number: number;
};

export type UserType = {
  name: string;
  email: string;
  age?: number;
  addresses?: AddressType[];
};

export interface UserRepositoryInterface {
  list(): Promise<UserType[] | undefined>;
}
