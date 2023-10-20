'use client'
import DashboardTwo from "@/layout/DashboardTwo";
import { useForm } from "@mantine/form"
import { Box, Group, Switch, Text } from "@mantine/core"
import LoginInfo from "./form/Login.info";
import ButtonPrimary from "@/components/Button";
import Link from "next/link";
import FormLayoutPrimary from "@/layout/FormLayout";

const Login = () => {
    // const [isSubmit, setSubmit] = useState(false);
    // const Navigate = useNavigate();

    // const Submit = async (values) => {
    //     setSubmit(true);
    //     const response = await loginMethod({ ...values })
    //     if (response?.status < 400) {
    //         form.reset();
    //         setSubmit(false);
    //         notificationShow({ title: 'Login Successful', color: 'green' })
    //         if (response?.data?.data?.role === "ADMIN") {
    //             Navigate('/admin/dashboard', {
    //                 replace: true
    //             })
    //         }
    //         else if (response?.data?.data?.role === "USER") {
    //             Navigate('/dashboard', {
    //                 replace: true
    //             })
    //         }
    //         else if (response?.data?.data?.role === "VENDOR") {
    //             Navigate('/professionals/dashboard', {
    //                 replace: true
    //             })
    //         }
    //     }
    //     else {
    //         setSubmit(false);
    //         notificationShow({ title: 'Login Error', message: `${response?.message}`, color: 'red' })
    //     }
    // }

    const form = useForm({
        initialValues: {
            email: '',
            password: ''
        },
        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email",
        },
    })


    return (
        <>
            <DashboardTwo user={false}>
                <FormLayoutPrimary title="Login">
                    <Box>
                        <form onSubmit={form.onSubmit(values => Submit(values))}>
                            <LoginInfo form={form} />
                            <Text sx={{ textAlign: 'end' }}><Link href="/request" target="_blank" style={{ textDecoration: 'none', color: '#37b24d' }}>Forget Password ?</Link> </Text>

                            <Group position="center" mt="md">
                                <ButtonPrimary type="submit" text="Login" />
                                {
                                    // isSubmit ? <LoaderButton /> : <ButtonPrimary type="submit" text="Submit" />
                                }
                            </Group>
                            <Text mt={1} sx={{ textAlign: 'center' }}>Don't have account ? <Link href="/signup" target="_blank" style={{ textDecoration: 'none', color: '#37b24d' }}>Signup</Link> </Text>
                        </form>
                    </Box>
                </FormLayoutPrimary>
            </DashboardTwo>
        </>
    );
}

export default Login;