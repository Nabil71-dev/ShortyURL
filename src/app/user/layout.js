import DashboardTwo from '@/layout/DashboardTwo';

const UserLayout = ({children}) => {
    return (
        <DashboardTwo user={true}>
            {children}
        </DashboardTwo>
    )
}
 
export default UserLayout;