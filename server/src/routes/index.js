import user from "./user";
import registorseller from "./registorseller";
import shop from "./shop";
import { notfound } from "../middlewares/handle_error";
const initRoutes = (app) => {
  app.use("/api/v1/user", user);
  app.use("/api/v1/registorseller", registorseller);
  app.use("/api/v1/shop", shop);
  app.use(notfound);
};

module.exports = initRoutes;
