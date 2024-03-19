import { Category } from "@/db/schema/category";
import { addCategory, deleteCategory, getCategories, getCategory, updateCategory } from "@/handlers/categories.handler";
import categoryModel from "@/models/category.model";
import { Elysia } from "elysia";

const CategoryRoutes = new Elysia({ prefix: '/category' })
    .use(categoryModel)
    .get("/", async() => await getCategories())
    .get("/:id", ({params}) => getCategory({id: params.id}))
    .post("/", ({body}) => addCategory(body as Category), {
        body: 'createBody'
    })
    .patch("/:id", ({params, body}) => updateCategory({id: params.id}, body as Category),{
        body: 'updateBody'
    })
    .delete("/:id", ({params})=> deleteCategory({id: params.id}))

export default CategoryRoutes