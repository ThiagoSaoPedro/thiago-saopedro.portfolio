import { env as clientEnv } from "./client";

export { clientEnv as env };

export const verifyEnv = () => {
  clientEnv;
};
