import { Router, Request, Response, NextFunction } from "express";
import passport from "passport";

import secureValidation from "../validations/secure/update";
import { update } from "../controllers/secure";
import { validate } from "../controllers/utils";

const router = Router();

router.post(
    "/update",
    secureValidation,
    (request: Request, response: Response, next: NextFunction) => {
        validate(request).then(next).catch(next);
    },
    (request: Request, response: Response, next: NextFunction) => {
        update(request).then(next).catch(next);
    }
);

export default router;
