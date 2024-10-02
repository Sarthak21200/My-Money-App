

import {  z } from 'zod';

export const SignUpZod = z.object({
    phone:z.string().min(10 , {message:"phone is required"}),
    name:z.string(),
    password:z.string().min(6,{ message: "Password confirmation must be at least 6 characters long" })
})