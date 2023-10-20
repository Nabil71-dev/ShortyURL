'use client'
import { Container} from "@mantine/core";
import NumberCount from "./state-data/NumberCount";
import UrlCount from "./state-data/UrlCount";
import UsersCount from "./state-data/UsersCount";

const UserDashboard = () => {
    return (
        <Container w='100%'>
            <NumberCount />
            <br />
            <UrlCount />
            <br />
            <UsersCount />
        </Container>
    );
}

export default UserDashboard;