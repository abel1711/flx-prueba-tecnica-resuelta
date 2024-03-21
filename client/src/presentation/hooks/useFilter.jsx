import { useDispatch } from "react-redux";
import { setFilterByName, setFilterByStatus } from "../redux/features/users/usersSlice";

export const useFilter = () => {
    const dispatch = useDispatch();

    const handleFilterByStatus = (value) => {
        dispatch(setFilterByStatus(value));
    };

    const handleFilterByName = (value = '') => {
        dispatch(setFilterByName(value.trim()))
    };
    return {
        handleFilterByStatus,
        handleFilterByName
    }
}
