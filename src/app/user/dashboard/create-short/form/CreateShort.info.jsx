import InputField from "@/components/InputField";
import { expTime } from "@/utils/constant";

const CreateShortInfo = ({ form }) => {
    return (
        <div className="rounded-lg border-2 p-5">
            <InputField mb="sm" label="EXPIRES IN" placeholder="select time" required Type="Select" data={expTime}  {...form.getInputProps("expiresIn")} />
            <InputField mb="sm" label="URL" placeholder="Original URL" required Type="Text"  {...form.getInputProps("originalUrl")} />
        </div>
    );
}

export default CreateShortInfo;
