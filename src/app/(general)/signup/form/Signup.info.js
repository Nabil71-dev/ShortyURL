
import InputField from "@/components/InputField";

const SignupInfo = ({ form, name, email,setName,setMail }) => {
    return (
        <>
            <InputField value={name} mb="md" label="NAME" placeholder="name" required Type="Text" onChange={(event) => setName(event.currentTarget.value)}/>
            <InputField value={email} mb="md" label="EMAIL" placeholder="email" required Type="Text" onChange={(event) => setMail(event.currentTarget.value)}/>
            <InputField mb="md" label="PASSWORD" placeholder="password" required Type="Password" {...form.getInputProps("password")} />
            <InputField mb="md" label="CONFIRM PASSWORD" placeholder="confirm password" required Type="Password" {...form.getInputProps("confirmPass")} />
        </>
    );
}

export default SignupInfo;