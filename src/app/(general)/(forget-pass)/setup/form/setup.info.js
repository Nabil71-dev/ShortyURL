import InputField from "@/components/InputField";

const SetupPassInfo = ({ form }) => {
    return (
        <>
            <InputField mb="md" label="PASSWORD" placeholder="password" required Type="Password" {...form.getInputProps("password")} />
            <InputField mb="md" label="CONFIRM PASSWORD" placeholder="confirm password" required Type="Password" {...form.getInputProps("confirmPass")} />
        </>
    );
}

export default SetupPassInfo;