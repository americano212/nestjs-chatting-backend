export interface JwtSign {
  accessToken: string;
  refreshToken: string;
}

export interface Payload {
  userId: number;
  username?: string;
}

export interface JwtPayload {
  sub: number;
  username?: string;
}
