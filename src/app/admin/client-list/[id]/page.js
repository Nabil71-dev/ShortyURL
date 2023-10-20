import UrlTable from "../../url-list/ListTable";
import StatCard from "@/components/Stat.card";

const data = [
    {
        shortened: 'short url 1',
        mainurl: 'main url 1',
        isActive: true,
    },
    {
        shortened: 'short url 2',
        mainurl: 'main url 2',
        isActive: true,
    },
    {
        shortened: 'short url 3',
        mainurl: 'main url 3',
        isActive: false,
    },
]
const state = [
    {
        value: 100,
        type: 'TOTAL URLs',
    },
    {
        value: 10,
        type: 'EXIST URLs',
    },
    {
        value: 90,
        type: 'LEFT URLs',
    },
]

const ClientDetails = ({ params }) => {
    return (
        <>
                <section style={{ width: '100%' }}>
                    <StatCard data={state}/>

                    <UrlTable data={data} user={false}/>
                </section>
        </>
    );
}

export default ClientDetails;