import InputField from "@/components/InputField";
import { expTime } from "@/utils/constant";

const CreateShortInfo = ({ form }) => {
    return (
        <div className="rounded-lg border-2 p-5">
            <InputField mb="sm" label="Expires In" placeholder="select time (min)" Type="Select" data={expTime}  {...form.getInputProps("expIn")} />
            <InputField mb="sm" label="URL" placeholder="Original URL" required Type="Text"  {...form.getInputProps("originalUrl")} />
        </div>
    );
}

export default CreateShortInfo;
