'use client'
import { useForm } from "@mantine/form"
import { Box, Group, Switch, Text } from "@mantine/core"
import ButtonPrimary from "@/components/Button";
import Link from "next/link";
import FormLayoutPrimary from "@/layout/FormLayout";
import SignupInfo from "./form/Signup.info";
import { IconBrandGoogle } from '@tabler/icons-react';

const Signup = () => {
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
            name: '',
            email: '',
            password: '',
            confirmPass: '',
            role: 'user'
        },
        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email",
            confirmPass: (value, values) =>
                value !== values.password ? 'Passwords did not match' : null,
        },
    })

    return (
        <>
            <FormLayoutPrimary title="Create Account">
                <Box>
                    <form onSubmit={form.onSubmit(values => Submit(values))}>
                        <SignupInfo form={form} />
                        <Group position="center" mt="md">
                            <ButtonPrimary type="submit" text="Sign up" />
                            {
                                // isSubmit ? <LoaderButton /> : <ButtonPrimary type="submit" text="Submit" />
                            }
                        </Group>
                        {/* <Group position="center" mt="sm" mb="md">
                            <Text mt={1} sx={{ textAlign: 'center' }}>Or, Signup with </Text><IconBrandGoogle color="green" size="1.5rem" stroke={2.5}/>
                        </Group> */}
                        <Text mt={1} sx={{ textAlign: 'center' }}>Already have an account ? <Link href="/" target="_blank" style={{ textDecoration: 'none', color: '#37b24d' }}>Login</Link> </Text>
                    </form>
                </Box>
            </FormLayoutPrimary>
        </>
    );
}

export default Signup;