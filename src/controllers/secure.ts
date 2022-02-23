import { Request } from "express";

import User from "../models/user";
import {
    updateUser
} from "../helpers/secure";
import { randomString } from "../helpers/utils";
import config from "../config";
import responseMessage from "../constants/message/response";

export const update = async (request: Request) => {
    try {
        const info = await updateUser(
            request.body.id,
            request.body.firstName,
            request.body.lastName
        );
        request.responseData = info;
    } catch (error: any) {
        throw error;
    }
};
