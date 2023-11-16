'use client'
import { useForm } from "@mantine/form";
import { Box, Group, Text } from "@mantine/core";
import ButtonPrimary from "@/components/Button";
import CreateShortInfo from "./form/CreateShort.info";
import { expMap } from "@/utils/constant";
import { useDispatch } from "react-redux";
import { createUrl } from '../../../../services/urls.slice'
import { useState } from "react";
import LoadingButton from "@/components/Loading.button";

const CreateShortForm = ({ close, limit }) => {
    const [isSubmit, setSubmit] = useState(false)
    const dispatch = useDispatch();
    const form = useForm({
        initialValues: {
            expiresIn: '',
            originalUrl: '',
        },
        validate: {
            originalUrl: (value) =>
                /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(value) ? null : "Invalid URL",
        },
    })

    const submit = (values) => {
        setSubmit(true)
        if (limit > 0) {
            values.expiresIn = expMap[values.expiresIn];
            dispatch(createUrl({ values, close}));
        }
        setSubmit(false)
    }

    return (
        <Box>
            <form onSubmit={form.onSubmit(values => submit(values))}>
                {
                    limit > 0 && <CreateShortInfo form={form} />
                }
                <Group position="center" mt="md">
                    {
                        isSubmit ? <LoadingButton /> : <>
                            {limit > 0 ? <ButtonPrimary type="submit" text="Submit" /> : <Text c="red" fw={600}>Your daily limit is over</Text>}
                        </>
                    }
                </Group>
            </form>
        </Box>
    );
}

export default CreateShortForm;