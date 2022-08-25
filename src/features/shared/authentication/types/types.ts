export interface IAuthParams{
  username: string;
  email:string;
  password: string;
}

//for test purpose
export interface IUser{
  name: string,
  gender: string,
  probability: number,
  count: number
  company?:string
}

export enum RoleTypes{
  guest = 'guest',
  candidate = 'candidate',
  company = 'company'
}

export type Role = RoleTypes.guest | RoleTypes.candidate | RoleTypes.company | string;