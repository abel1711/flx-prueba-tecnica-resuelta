import { useDispatch } from "react-redux";
import { setFilterByName, setFilterByStatus } from "../redux/features/users/usersSlice";
import { getUsersThunks } from "../redux";

export const useFilter = () => {
    const dispatch = useDispatch();

    const handleFilterByStatus = (value) => {
        dispatch(setFilterByStatus(value));
        dispatch(getUsersThunks())
    };

    const handleFilterByName = (value = '') => {
        dispatch(setFilterByName(value.trim()))
        dispatch(getUsersThunks())
    };
    return {
        handleFilterByStatus,
        handleFilterByName
    }
}
