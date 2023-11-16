'use client'
import { getAllUrls, reset } from "@/services/allUrls.slice";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import AllUrlsTable from "./UrlsAll.table";
import { Loader } from "@mantine/core";

const UrlList = () => {
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const dispatch = useDispatch();
    const { loading, allUrls } = useSelector(state => state.allUrls);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    useEffect(() => {
        dispatch(getAllUrls(page));

        // return () => dispatch(reset());
    }, [dispatch, page])

    return (
        <>
            {
                isLoading && <Loader />
            }
            {
                !isLoading && <AllUrlsTable urls={allUrls} user={false} setPage={setPage} loading={loading} />
            }
        </>
    );
}

export default UrlList;