import { ISODateString } from "next-auth";

export interface AuthUser {
  id?: string | null;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  provider?: string | null;
  token?: string | null;
}

export interface AuthSession {
  user?: AuthUser;
  expires: ISODateString;
}
