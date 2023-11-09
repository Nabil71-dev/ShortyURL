import { Textarea, Flex, Text, TextInput, MultiSelect, Select, PasswordInput, NumberInput } from "@mantine/core"

const InputField = ({ Type, label, fw, ...value }) => {
    const { required } = { ...value }
    const error = { ...value.error }

    const inputType = () => {
        if (Type === "Text") {
            return (<TextInput sx={{ border: `${error[0] ? '' : '2px solid #D1D1D1'}`, borderRadius: '5px' }} {...value} />)
        }
        else if (Type === "Select") {
            return (<Select maxDropdownHeight={120} searchable clearable sx={{ border: `${error[0] ? '' : '2px solid #D1D1D1'}`, borderRadius: '5px' }} {...value} />)
        }
        else if (Type === "MultiSelect") {
            return (<MultiSelect maxDropdownHeight={120} sx={{ border: `${error[0] ? '' : '2px solid #D1D1D1'}`, borderRadius: '5px' }} {...value} />)
        }
        else if (Type === "Password") {
            return (<PasswordInput sx={{ border: `${error[0] ? '' : '2px solid #D1D1D1'}`, borderRadius: '5px' }} {...value} />)
        }
        else if (Type === "Number") {
            return (<NumberInput sx={{ border: `${error[0] ? '' : '2px solid #D1D1D1'}`, borderRadius: '5px' }} {...value} />)
        }
        else if (Type === "TextArea") {
            return (<Textarea sx={{ border: `${error[0] ? '' : '2px solid #D1D1D1'}`, borderRadius: '5px' }} {...value} />)
        }

    }

    return (
        <Flex direction='column'>
            {
                fw ? <h3>{label}</h3> : <p >{label}<Text span c="red" inherit>{required ? '*' : ''}</Text></p>
            }
            {inputType()}
        </Flex>
    );
}

export default InputField;