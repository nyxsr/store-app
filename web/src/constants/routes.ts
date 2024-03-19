import { PUBLIC_BACKEND_URI } from "$env/static/public";

const Routes = <const>{
    BASE: PUBLIC_BACKEND_URI,
    USERS: `${PUBLIC_BACKEND_URI}users`,
    CATEGORIES: `${PUBLIC_BACKEND_URI}category`,
    PRODUCTS: `${PUBLIC_BACKEND_URI}product`,
}

export default Routes