'use client'
import { useForm } from "@mantine/form"
import { Box, Group } from "@mantine/core"
import ButtonPrimary from "@/components/Button";
import FormLayoutPrimary from "@/layout/FormLayout";
import InputField from "@/components/InputField";
import LoadingButton from "@/components/Loading.button";
import { useState } from "react";
import { useRouter } from 'next/navigation'
import { requestPassChange } from "@/utils/auth.service";
import { NotificationShow } from "@/components/NotificationShow";

const RequestSetup = () => {
    const [isSubmit, setSubmit] = useState(false);
    const router = useRouter()

    const Submit = async (values) => {
        setSubmit(true);
        const response = await requestPassChange(values)
        if (response?.status < 400) {
            form.reset();
            setSubmit(false);
            NotificationShow({ title: 'Failed', message: `${response?.data?.message}`, color: 'green' })
            router.push('/setup')
        }
        else {
            setSubmit(false);
            NotificationShow({ title: 'Failed', message: `${response?.response?.data?.message}`, color: 'red' })
        }
    }

    const form = useForm({
        initialValues: {
            email: '',
        },
        validate: {
            email: (value) =>
                /^\S+@\S+$/.test(value) ? null : "Invalid email",
        },
    })


    return (
        <>
            <FormLayoutPrimary title="Request to setup">
                <Box>
                    <form onSubmit={form.onSubmit(values => Submit(values))}>
                        <InputField mb="md" label="EMAIL" placeholder="email" required Type="Text"   {...form.getInputProps("email")} />
                        <Group position="center" mt="md">
                            {/* <ButtonPrimary type="submit" text="Request" /> */}
                            {
                                isSubmit ? <LoadingButton /> : <ButtonPrimary type="submit" text="Request" />
                            }
                        </Group>
                    </form>
                </Box>
            </FormLayoutPrimary>
        </>
    );
}

export default RequestSetup;