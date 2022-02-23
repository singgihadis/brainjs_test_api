import { Request, Router, Response } from "express";

import { handleBadRequest, handleOk } from "../middlewares/response";

import auth from "./auth";
import secure from "./secure";

const router = Router();

router.get("/", (request: Request, response: Response) => {
    response.json({
        version: "1.0.0",
    });
});

router.use("/secure", secure, handleOk, handleBadRequest);
router.use("/auth", auth, handleOk, handleBadRequest);

export default router;
