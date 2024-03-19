import "dotenv/config";
import { Elysia } from "elysia";
import { logger } from "@grotto/logysia";
import UserRoutes from "./routes/users.route";
import CategoryRoutes from "./routes/categories.route";
import ProductRoutes from "./routes/products.route";
import cors from "@elysiajs/cors";
import models from "./models/category.model";

const app = new Elysia()  
  .use(models)
  .use(cors())
  .use(logger({logIP: true}))
  .use(UserRoutes)
  .use(CategoryRoutes)
  .use(ProductRoutes)
  .get("/", () => {
    return {
      message: "🦊 Elysia is running",
    };
  })
  .listen(3000);

export type App = typeof app;

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
