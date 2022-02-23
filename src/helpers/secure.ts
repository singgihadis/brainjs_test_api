import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

import User from "../models/user";
import { update as updateError } from "../constants/errors/secure";
import { randomString } from "./utils";
import config from "../config";

export const updateUser = async (
    id: string,
    firstName: string,
    lastName: String
) => {
    try {
        const user: any = await User.updateOne({
            _id: id,
        },{
            $set: {
                profile:{
                  first_name: firstName,
                  last_name: lastName
                }
            }
        }
        );
        if (!user) throw updateError.FAILED;
        return {
            first_name: firstName,
            last_name: lastName
        };
    } catch (error: any) {
        throw error;
    }
};
