'use client'
import { useEffect,useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getProfile, reset } from '../../../services/user.slice';
import { Loader, Text } from "@mantine/core";
import InterPage from "./interPage";

const UserDashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const { loading, error, profile } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);


    useEffect(() => {
        dispatch(getProfile())

        return () => dispatch(reset());
    }, [dispatch])

    return (
        <>
            {
                isLoading && <Loader />
            }
            {
                !isLoading && <section style={{ width: '100%' }}>
                    {
                        loading && <Loader />
                    }
                    {
                        !loading && error == "" && <InterPage id={profile?.data?.userID} user={true} limit={profile?.data?.dailyLimit} />
                    }
                    {
                        error != "" && <Text>{error}</Text>
                    }
                </section>
            }
        </>
    );
}

export default UserDashboard;