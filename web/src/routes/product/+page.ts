import Routes from "@/constants/routes";
import type { PageLoad } from "./$types";
import type { Category, Product } from '$server/db/schema'

interface ProductWithCategory extends Product {
    category: Category
}

export const load: PageLoad = async ({fetch}) => {
    const res = await fetch(Routes.PRODUCTS)
    return {
        products: (await res.json()) as ProductWithCategory[]
    }
}