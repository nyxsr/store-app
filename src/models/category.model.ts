import { Elysia, t } from "elysia";

const categoryModel = new Elysia().model({
    createBody: t.Object({
        name: t.String({
            error: "Category name is required"
        })
    }),
    updateBody: t.Object({
        name: t.String({
            error: "Category name is required"
        })
    }),

})

export default categoryModel