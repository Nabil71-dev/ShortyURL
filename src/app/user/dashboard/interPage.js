'use client'
import UrlTable from "@/app/admin/url-list/ListTable";
import StatCard from "@/components/Stat.card";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUrls } from "@/services/urls.slice";
import { getStates, reset } from '@/services/state.slice';
import { Loader, Text } from "@mantine/core";

const InterPage = ({ id, user, limit }) => {
    const [page, setPage] = useState(0);
    const urlsData = useSelector(state => state.urls);
    const { loading, error, data } = useSelector(state => state.stats);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStates(id));

        return () => dispatch(reset());
    }, [urlsData,dispatch, id])

    useEffect(() => {
        dispatch(getUrls([page, id]));
       
    }, [dispatch, page, id])

    return (
        <>
            <section style={{ width: '100%' }}>
                {
                    loading && <Loader />
                }
                {
                    !loading && error == "" && <StatCard data={data?.data} />
                }
                {
                    error != "" && <Text c="red">Something went wrong</Text>
                }
                <UrlTable urls={urlsData?.urls} limit={limit} user={user} setPage={setPage} loading={urlsData?.loading} />
            </section>
        </>
    );
}

export default InterPage;