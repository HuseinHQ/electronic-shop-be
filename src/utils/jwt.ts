import jwt from 'jsonwebtoken';

const secret = process.env.JWT_SECRET as jwt.Secret;

export const createToken = (payload: string | object | Buffer) => {
  return jwt.sign(payload, secret);
};

export const verifyToken = (token: string) => {
  return jwt.verify(token, secret);
};
