import InputField from "@/components/InputField";

const LoginInfo = ({form}) => {
    return (
        <>
            <InputField mb="md" label="EMAIL" placeholder="email" required Type="Text"   {...form.getInputProps("email")} />
            <InputField label="PASSWORD" placeholder="Password" required Type="Password" {...form.getInputProps("password")} />
        </>
    );
}

export default LoginInfo;