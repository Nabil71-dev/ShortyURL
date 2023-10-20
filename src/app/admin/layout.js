import Dashboard from "@/layout/Dashboard";
import { adminNavLinks } from "@/nav-config/navitem.admin";

const AdminLayout = ({ children }) => {
    return (
        <Dashboard links={adminNavLinks} >
            {children}
        </Dashboard>
    );
}

export default AdminLayout;