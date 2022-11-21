import { Router } from "express";
import mailRoute from "./mail.routes";
const router = Router();
router.use("/mail", mailRoute);

export default router;
