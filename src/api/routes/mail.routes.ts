import { Router } from "express";
import { sendMailController } from "../controller/mail.controller";

const router = Router();

router.post("/", sendMailController);

export default router;
