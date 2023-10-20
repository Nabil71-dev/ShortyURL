import InputField from "@/components/InputField";

const SignupInfo = ({form}) => {
    return (
        <>
            <InputField mb="md" label="NAME" placeholder="name" required Type="Text"   {...form.getInputProps("name")} />
            <InputField mb="md" label="EMAIL" placeholder="email" required Type="Text"   {...form.getInputProps("email")} />
            <InputField mb="md" label="PASSWORD" placeholder="password" required Type="Password" {...form.getInputProps("password")} />
            <InputField mb="md" label="CONFIRM PASSWORD" placeholder="confirm password" required Type="Password" {...form.getInputProps("confirmPass")} />
        </>
    );
}

export default SignupInfo;