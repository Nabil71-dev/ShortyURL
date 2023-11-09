'use client'
import { getAllUrls, reset } from "@/services/allUrls.slice";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import AllUrlsTable from "./UrlsAll.table";

const UrlList = () => {
    const [page, setPage] = useState(0);

    const dispatch = useDispatch();
    const { loading, allUrls } = useSelector(state => state.allUrls);

    useEffect(() => {
        dispatch(getAllUrls(page));

        // return () => dispatch(reset());
    }, [dispatch, page])

    return (
        <>
            <AllUrlsTable urls={allUrls} user={false} setPage={setPage} loading={loading} />
        </>
    );
}

export default UrlList;