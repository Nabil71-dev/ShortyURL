'use client'
import { Container, Loader } from "@mantine/core";
import NumberCount from "./state-data/NumberCount";
import UrlCount from "./state-data/UrlCount";
import UsersCount from "./state-data/UsersCount";
import { useState, useEffect } from "react";

const UserDashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            {isLoading && <Loader />}
            {
                !isLoading && <Container w='100%'>
                    <NumberCount />
                    <br />
                    <UrlCount />
                    <br />
                    <UsersCount />
                </Container>
            }
        </>
    );
}

export default UserDashboard;