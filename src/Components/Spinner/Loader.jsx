import { RingLoader } from "react-spinners";

const Loader = ({ size = 100, inline = false ,color = "#6af3de3b" }) => {
    return (
        <div className={inline ? "" : "flex items-center justify-center min-h-[calc(100vh-358px)]"}>
            <RingLoader size={size} color={color} />
        </div>
    );
};

export default Loader;