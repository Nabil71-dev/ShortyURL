'use client'
import { useState, useEffect } from "react";
import { useForm } from "@mantine/form"
import { Box, Group, Text } from "@mantine/core"
import ButtonPrimary from "@/components/Button";
import Link from "next/link";
import FormLayoutPrimary from "@/layout/FormLayout";
import SignupInfo from "./form/Signup.info";
import { IconBrandGoogle } from '@tabler/icons-react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import LoadingButton from "@/components/Loading.button";
import { NotificationShow } from "@/components/NotificationShow";
import { signup } from "@/utils/auth.service";
import { useRouter } from 'next/navigation'
import DashboardTwo from "@/layout/DashboardTwo";

const Signup = () => {
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [isSubmit, setSubmit] = useState(false);

    const router = useRouter()
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPass: '',
            isAdmin: false
        },
        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email",
            confirmPass: (value, values) =>
                value !== values.password ? 'Passwords did not match' : null,
        },
    })

    const loginWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                setName(result.user.displayName);
                setMail(result.user.email);
            }).catch((error) => {
                alert(error.message)
            });
    }

    useEffect(() => {
        form.values.name = name
        form.values.email = mail
    }, [name, mail,form.values.name,form.values.email])

    const Submit = async (values) => {
        setSubmit(true);
        delete values.confirmPass;
        const response = await signup(values)
        if (response?.status < 400) {
            form.reset();
            setSubmit(false);
            router.push('/');
        }
        else {
            setSubmit(false);
            NotificationShow({ title: 'Failed', message: `${response?.response?.data?.message}`, color: 'red' })
        }
    }


    return (
        <DashboardTwo user={false}>
            <FormLayoutPrimary title="Create Account">
                <Box>
                    <form onSubmit={form.onSubmit(values => Submit(values))}>
                        <SignupInfo form={form} name={name} email={mail} setName={setName} setMail={setMail} />
                        <Group position="center" mt="md">
                            {
                                isSubmit ? <LoadingButton /> : <ButtonPrimary type="submit" text="Sign up" />
                            }
                        </Group>
                        <Group position="center" mt="sm" mb="md">
                            <Text mt={1} sx={{ textAlign: 'center' }}>Or, Signup with </Text><IconBrandGoogle style={{ cursor: 'pointer' }} onClick={loginWithGoogle} color="green" size="1.5rem" stroke={2.5} />
                        </Group>
                        <Text mt={1} sx={{ textAlign: 'center' }}>Already have an account ? <Link href="/" target="_blank" style={{ textDecoration: 'none', color: '#37b24d' }}>Login</Link> </Text>
                    </form>
                </Box>
            </FormLayoutPrimary>
        </DashboardTwo>
    );
}

export default Signup;