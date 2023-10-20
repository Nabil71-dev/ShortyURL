import InputField from "@/components/InputField";

const CreateAdminInfo = ({ form }) => {
    return (
        <div className="rounded-lg border-2 p-5">
            <InputField mb="sm" label="Name" placeholder="name" required Type="Text"  {...form.getInputProps("name")} />
            <InputField mb="sm" label="EMAIL" placeholder="email" required Type="Text"  {...form.getInputProps("email")} />
            <InputField mb="sm" label="PASSWORD" placeholder="Password" required Type="Password" {...form.getInputProps("password")} />
            <InputField mb="sm" label="CONFIRM PASSWORD" placeholder="Confirm Password" required Type="Password" {...form.getInputProps("confirmPass")} />
        </div>
    );
}

export default CreateAdminInfo;