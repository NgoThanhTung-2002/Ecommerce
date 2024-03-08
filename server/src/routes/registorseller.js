import * as controller from "../controllers";
import express from "express";
import verifytoken from "../middlewares/verify_token";
import { isAdmin, isSeller } from "../middlewares/verify_roles";
const router = express.Router();
router.get("/", [verifytoken, isAdmin], controller.getRegistorSellers);
router.post("/", [verifytoken], controller.createRegistorSeller);
router.delete(
  "/:rsid",
  [verifytoken, isAdmin],
  controller.deleteRegistorSeller
);
module.exports = router;
