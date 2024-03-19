import { NewProduct } from "@/db/schema/product";
import { addProduct, deleteProduct, getProduct, getProducts, updateProduct } from "@/handlers/products.handler";
import productModel from "@/models/product.model";
import { Elysia } from "elysia";

const ProductRoutes = new Elysia({ prefix: '/product' })
    .use(productModel)
    .get("/", async() => await getProducts())
    .get("/:id", ({params}) => getProduct({id: params.id}))
    .post("/", ({body}) => addProduct(body as NewProduct), {
        body:'createBody'
    })
    .patch("/:id", ({params, body}) => updateProduct({id: params.id}, body as NewProduct),{
        body:'updateBody'
    })
    .delete("/:id", ({params})=> deleteProduct({id: params.id}))

export default ProductRoutes