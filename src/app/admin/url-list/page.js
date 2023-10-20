import UrlTable from "./ListTable";

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

const UrlList = () => {

    return (
        <>
            {/* <Dashboard links={adminNavLinks} > */}
                <UrlTable data={data} />
            {/* </Dashboard> */}
        </>
    );
}

export default UrlList;