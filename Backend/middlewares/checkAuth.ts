import jwt, { JwtPayload } from "jsonwebtoken";

const checkLogin = (req: any, res: any, next: Function) => {
 const { authorization } = req.headers;
 try {
  const token = authorization.split(" ")[1];
const decoded = jwt.verify(token, process.env.JWT_SECRET || "") as JwtPayload;
  const { userId, username } = decoded;
  req.userId = userId;
  req.username = username;
  next();
 } catch {
  next("Authentication failed!");
 }
};

export default checkLogin;
