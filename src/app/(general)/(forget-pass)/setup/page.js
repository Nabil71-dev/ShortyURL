'use client'
import { useForm } from "@mantine/form"
import { Box, Group } from "@mantine/core"
import ButtonPrimary from "@/components/Button";
import FormLayoutPrimary from "@/layout/FormLayout";
import SetupPassInfo from "./form/setup.info";

const SetupPass = () => {
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
                    <form onSubmit={form.onSubmit(values => console.log(values))}>
                        <SetupPassInfo form={form} />
                        <Group position="center" mt="md">
                            <ButtonPrimary type="submit" text="Submit" />
                            {
                                // isSubmit ? <LoaderButton /> : <ButtonPrimary type="submit" text="Submit" />
                            }
                        </Group>
                    </form>
                </Box>
            </FormLayoutPrimary>
        </>
    );
}

export default SetupPass;