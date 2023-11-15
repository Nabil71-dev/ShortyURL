'use client'
import DashboardTwo from "@/layout/DashboardTwo";
import { useForm } from "@mantine/form"
import { Box, Group, Switch, Text } from "@mantine/core"
import { useRouter } from 'next/navigation'
import LoginInfo from "./form/Login.info";
import ButtonPrimary from "@/components/Button";
import Link from "next/link";
import FormLayoutPrimary from "@/layout/FormLayout";
import { login } from "@/utils/auth.service";
import LoadingButton from "@/components/Loading.button";
import { useState } from "react";
import { NotificationShow } from "@/components/NotificationShow";

const Login = () => {
    const [isSubmit, setSubmit] = useState(false);
    const router = useRouter()

    const Submit = async (values) => {
        setSubmit(true);
        const response = await login(values);
        
        if (response?.status < 400) {
            form.reset();
            setSubmit(false);
            NotificationShow({ title: 'Success', message: `${response?.data?.message}`, color: 'green' })
            if (response?.data?.data?.admin==="true") {
                console.log(response?.data?.data)
                router.push('/admin/dashboard')
            }
            else if (response?.data?.data?.admin==="false") {
                router.push('/user/dashboard')
            }
        }
        else {
            setSubmit(false);
            NotificationShow({ title: 'Failed', message: `${response?.response?.data?.message}`, color: 'red' })
        }
    }

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
                                {/* <ButtonPrimary type="submit" text="Login" /> */}
                                {
                                    isSubmit ? <LoadingButton /> : <ButtonPrimary type="submit" text="Login" />
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