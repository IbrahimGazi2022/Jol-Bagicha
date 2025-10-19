import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { Cardio } from 'ldrs/react'
import 'ldrs/react/Cardio.css'

// Default values shown
<Cardio
    size="50"
    stroke="4"
    speed="2"
    color="black"
/>

const Loader = () => {
    const isLoading = useSelector((state: RootState) => state.loader.isLoading);

    return (
        isLoading && (
            <div className="fixed inset-0 bg-[#D8EFE3] flex items-center justify-center z-500">
                <Cardio
                    size="80"
                    stroke="6"
                    speed="2"
                    color="black"
                />
            </div>
        )
    )
}

export default Loader