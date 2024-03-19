import { Elysia } from "elysia";
import { addUser, deleteUser, getUser, getUsers, updateUser } from "@/handlers/users.handler";
import { NewUser } from "@/db/schema/users";
import userModel from "@/models/user.model";

const UserRoutes = new Elysia({ prefix: '/user' })
    .use(userModel)
    .get("/", await getUsers())
    .get("/:id", ({params}) => getUser({id: params.id}))
    .patch("/:id", ({params, body}) => updateUser({id: params.id}, body as NewUser), {
        body: 'updateBody'
    })
    .post("/", ({body}) => addUser(body as NewUser),{
        body: 'createBody'
    })
    .delete("/:id", ({params})=> deleteUser({id: params.id}))

export default UserRoutes