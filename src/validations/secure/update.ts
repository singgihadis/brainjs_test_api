import { body } from "express-validator";

import commonError from "../../constants/errors/common";

const validate = [
    body("firstName")
        .escape()
        .trim()
        .isLength({
            min: 1
        })
        .withMessage(
            commonError.REQUIRED.replace("{fieldname}", "First Name")
        ),
    body("lastName")
        .escape()
        .trim()
        .isLength({
            min: 1
        })
        .withMessage(commonError.REQUIRED.replace("{fieldname}", "Last Name"))
];

export default validate;
