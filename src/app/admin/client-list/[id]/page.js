import InterPage from "@/app/user/dashboard/interPage";

const ClientDetails = ({ params }) => {
    return (
        <>
            <section style={{ width: '100%' }}>
               <InterPage id={params?.id} user={false} limit={0}/>
            </section>
        </>
    );
}

export default ClientDetails;