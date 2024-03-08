import * as controller from "../controllers";
import express from "express";
import verifytoken from "../middlewares/verify_token";
import { isAdmin, isSeller } from "../middlewares/verify_roles";
const router = express.Router();
router.post("/", [verifytoken, isAdmin], controller.createShop);
router.get("/", [verifytoken, isAdmin], controller.getShops);
router.get("/getShop", [verifytoken, isAdmin], controller.getshop);
router.put(
  "/updateStatusShop/:sid",
  [verifytoken, isAdmin],
  controller.updateStatusShop
);
router.put("/:sid", [verifytoken], controller.updateShop);
router.delete("/:sid", [verifytoken, isAdmin], controller.deleteShop);
module.exports = router;
