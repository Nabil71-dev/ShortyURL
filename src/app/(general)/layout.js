import DashboardTwo from '@/layout/DashboardTwo';

const GeneralLayout = ({children}) => {
    return (
        <DashboardTwo user={false}>
            {children}
        </DashboardTwo>
    )
}
 
export default GeneralLayout;