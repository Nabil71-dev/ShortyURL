import { useForm } from "@mantine/form"
import { Box, Group } from "@mantine/core"
import CreateAdminInfo from "./form/CreateAdmin.info";
import ButtonPrimary from "@/components/Button";

const CreateAdminForm = () => {
    const form = useForm({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmPass: '',
            role:'admin'
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
            <Box>
                <form onSubmit={form.onSubmit(values => console.log(values))}>
                    <CreateAdminInfo form={form} />
                    <Group position="center" mt="md">
                        <ButtonPrimary type="submit" text="Create" />
                        {/* {
                            isSubmit ? <LoaderButton /> : <ButtonPrimary type="submit" text="Submit" />
                        } */}
                    </Group>
                </form>
            </Box>
        </>
    );
}

export default CreateAdminForm;