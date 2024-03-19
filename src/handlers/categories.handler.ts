import { db } from "@/db";
import { Category, categories } from "@/db/schema/category";
import { Product, products } from "@/db/schema/product";
import { eq } from "drizzle-orm";
import _ from 'lodash'

interface CategoryWithType extends Category {
  products: Product[];
}

export async function getCategories() {
  try {
    const listCategory = await db.query.categories.findMany({
      with: {
        products: true,
      },
    });
    return listCategory;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getCategory({ id }: { id: string }) {
  try {
    const get = await db.query.categories.findFirst({
      where: eq(categories.id, id),
      with: {
        products: true,
      },
    });
    return get;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function addCategory(body: Category) {
  const { name } = body;
  try {
    const result = await db.insert(categories).values({ name }).returning();
    return {
      message: `Category ${result[0].name} added successfully`,
    };
  } catch (error) {
    console.log(`Error adding category :`, error);
    throw error;
  }
}

export async function updateCategory({ id }: { id: string }, body: Category) {
  const { name } = body;
  try {
    const result = await db
      .update(categories)
      .set({ name })
      .where(eq(categories.id, id))
      .returning();

    return {
      message: `Category ${result[0].name} updated successfully`,
    };
  } catch (error) {
    console.log(`Error updating category :`, error);
    throw error;
  }
}

export async function deleteCategory({ id }: { id: string }) {
  try {
    const find: CategoryWithType | undefined =
      await db.query.categories.findFirst({
        where: eq(categories.id, id),
        with: {
          products: true,
        },
      });

    if (find) {
      if (find.products.length > 0) {
        throw new Error("Category can't be deleted as it has products");
      }
    }else if(!find){
      throw new Error(`Category ${id} not found`);
    }

    const findCopy = _.cloneDeep(find)

    await db.delete(categories).where(eq(categories.id, id));
    return {
      message: `Category ${findCopy.name} deleted successfully`,
    };
  } catch (error) {
    console.log(`Error deleting category :`, error);
    throw error;
  }
}
