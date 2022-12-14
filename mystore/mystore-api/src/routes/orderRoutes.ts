import express from "express";
import administrator from "../middleware/admin";
import verifyAuthToken from "../middleware/verify_token";
import {
  add,
  index,
  update,
  show,
  remove,
  completed,
  current,
  status,
} from "../handlers/orders";

const router = express.Router();

router
  .route("/")
  .post(verifyAuthToken, add)
  .put(verifyAuthToken, update)
  .get(verifyAuthToken, administrator, index);
router
  .route("/:id")
  .get(verifyAuthToken, show)
  .put(verifyAuthToken, administrator, status)
  .delete(verifyAuthToken, administrator, remove);
router.route("/completed/:id").get(verifyAuthToken, completed);
router.route("/current/:id").get(verifyAuthToken, current);
export default router;
