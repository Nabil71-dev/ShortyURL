'use client'
import { useForm } from "@mantine/form"
import { Box, Group } from "@mantine/core"
import ButtonPrimary from "@/components/Button";
import FormLayoutPrimary from "@/layout/FormLayout";
import InputField from "@/components/InputField";

const RequestSetup = () => {
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
                    <form onSubmit={form.onSubmit(values => console.log(values))}>
                        <InputField mb="md" label="EMAIL" placeholder="email" required Type="Text"   {...form.getInputProps("email")} />
                        <Group position="center" mt="md">
                            <ButtonPrimary type="submit" text="Request" />
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

export default RequestSetup;