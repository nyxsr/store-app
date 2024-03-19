import { Elysia, t } from "elysia";

const userModel = new Elysia().model({
    createBody: t.Object({
        name: t.String({
            error: "Name is required"
        }),
        email: t.String({
            format:"email",
            error: "Invalid email!"
        }),
        password: t.String({
            error: "Password is required"
        })
    }),
    updateBody: t.Object({
        name: t.String({
            error: "Name is required"
        }),
        email: t.String({
            format:"email",
            error: "Invalid email!"
        }),
        password: t.String({
            error: "Password is required"
        })
    }),
})

export default userModel