const ButtonPrimary = ({ type, text, click, ...props }) => {
    return (
        <button
            className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center"
            type={type} onClick={click} {...props}
        >
            {text}
        </button>
    );
}

export default ButtonPrimary;