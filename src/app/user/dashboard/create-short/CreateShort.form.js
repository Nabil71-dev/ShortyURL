import { useForm } from "@mantine/form";
import { Box, Group } from "@mantine/core";
import ButtonPrimary from "@/components/Button";
import CreateShortInfo from "./form/CreateShort.info";

const CreateShortForm = () => {
    const form = useForm({
        initialValues: {
            expIn: '',
            originalUrl: '',
        },
        validate: {
            originalUrl: (value) =>
                /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(value) ? null : "Invalid URL",
        },
    })

    return (
        <Box>
            <form onSubmit={form.onSubmit(values => console.log(values))}>
                <CreateShortInfo form={form} />
                <Group position="center" mt="md">
                    <ButtonPrimary type="submit" text="Submit" />
                    {/* {
                    isSubmit ? <LoaderButton /> : <ButtonPrimary type="submit" text="Submit" />
                } */}
                </Group>
            </form>
        </Box>
    );
}

export default CreateShortForm;