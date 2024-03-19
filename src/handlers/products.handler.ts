import { db } from "@/db";
import { products } from "@/db/schema";
import { Category, categories } from "@/db/schema/category";
import { NewProduct, Product } from "@/db/schema/product";
import { eq } from "drizzle-orm";
import _ from "lodash";

export async function getProducts() {
  try {
    const listProduct = await db.query.products.findMany({
      with: {
        category: true,
      },
    })
    return listProduct;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getProduct({ id }: { id: string }) {
  try {
    const get = await db.query.products.findFirst({
      where: eq(products.id, id),
      with: {
        category: true,
      },
    });
    return get;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function addProduct(body: NewProduct) {
  try {
    const add = await db.insert(products).values(body).returning();
    return {
      message: `Product ${add[0].name} added successfully`,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateProduct({ id }: { id: string }, body: NewProduct) {
  try {
    const update = await db
      .update(products)
      .set(body)
      .where(eq(products.id, id))
      .returning();
    return {
      message: `Product ${update[0].name} updated successfully`,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function deleteProduct({ id }: { id: string }) {
  try {
    const find: Product & {category: Category} | undefined = await db.query.products.findFirst({
      where: eq(products.id, id),
      with: {
        category: true,
      },
    });

    if (!find) {
      throw new Error(`Product ${id} not found`);
    }

    const findCopy = _.cloneDeep(find)

    await db
      .update(products)
      .set({ deletedAt: new Date() })
      .where(eq(products.id, id));
    return {
      message: `Product ${findCopy.name} deleted successfully`,
    };
  } catch (error) {
    console.log(error);
    throw error;
  }
}
