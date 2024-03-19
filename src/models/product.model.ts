import { Elysia, t } from "elysia";

const productModel = new Elysia().model({
    createBody: t.Object({
        name: t.String({
            error: "Product name is required"
        }),
        categoryId: t.String({
            error: "categoryId is required"
        })
    }),
    updateBody: t.Object({
        name: t.String({
            error: "Product name is required"
        }),
        categoryId: t.String({
            error: "categoryId is required"
        })
    }),
})

export default productModel