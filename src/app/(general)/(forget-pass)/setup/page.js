'use client'
import { useForm } from "@mantine/form"
import { Box, Group } from "@mantine/core"
import ButtonPrimary from "@/components/Button";
import FormLayoutPrimary from "@/layout/FormLayout";
import SetupPassInfo from "./form/setup.info";
import LoadingButton from "@/components/Loading.button";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { NotificationShow } from "@/components/NotificationShow";
import { setNewPass } from "@/utils/auth.service";

const SetupPass = () => {
    const [isSubmit, setSubmit] = useState(false);
    const router = useRouter()

    const Submit = async (values) => {
        setSubmit(true);
        const response = await setNewPass(values)
        if (response?.status < 400) {
            form.reset();
            setSubmit(false);
            NotificationShow({ title: 'Success', message: `${response?.data?.message}`, color: 'green' })
            
            router.push('/')
        }
        else {
            setSubmit(false);
            NotificationShow({ title: 'Failed', message: `${response?.response?.data?.message}`, color: 'red' })
        }
    }

    const form = useForm({
        initialValues: {
            password: '',
            confirmPass: '',
        },
        validate: {
            confirmPass: (value, values) =>
                value !== values.password ? 'Passwords did not match' : null,
        },
    })


    return (
        <>
            <FormLayoutPrimary title="Setup password">
                <Box>
                    <form onSubmit={form.onSubmit(values => Submit(values))}>
                        <SetupPassInfo form={form} />
                        <Group position="center" mt="md">
                            {
                                isSubmit ? <LoadingButton /> : <ButtonPrimary type="submit" text="Submit" />
                            }
                        </Group>
                    </form>
                </Box>
            </FormLayoutPrimary>
        </>
    );
}

export default SetupPass;