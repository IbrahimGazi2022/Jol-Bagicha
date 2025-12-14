import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { showLoader, hideLoader } from "../../redux/loaderSlice";

const LoaderHandler = () => {
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        dispatch(showLoader());

        const timer = setTimeout(() => {
            dispatch(hideLoader());
        }, 2000);

        return () => clearTimeout(timer);
    }, [location.pathname, dispatch]);

    return null;
}

export default LoaderHandler;    