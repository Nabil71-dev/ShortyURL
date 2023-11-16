'use client'
import { useState, useEffect } from "react";
import InterPage from "@/app/user/dashboard/interPage";
import { Loader } from "@mantine/core";

const ClientDetails = ({ params }) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {
                isLoading && <Loader />
            }
            {
                !isLoading && <section style={{ width: '100%' }}>
                    <InterPage id={params?.id} user={false} limit={0} />
                </section>
            }
        </>
    );
}

export default ClientDetails;