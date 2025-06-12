import { AdminProductList } from "../../Components/AdminProductList";
import Layout from "../../Components/Layout"


export const Admin = () => {
  return (
    <Layout>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-3 inline-block border-primario pb-1">Panel de Administración</h2>
        <AdminProductList />
    </Layout>
  )
}


export default Admin;