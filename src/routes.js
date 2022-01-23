import ProductDetails from "./components/ProductDetails"
import ProductList from "./components/ProductList"

const routes = [
    {
      path: '/',
      exact: true,
      component: ProductList
    },
    {
      path: '/products/:productId',
      exact: true,
      component: ProductDetails
    }
]

export default routes