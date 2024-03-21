import { useState } from "react";
import { useDispatch } from "react-redux";
import { userApi } from "../../config/api/user-api";
import { getUsersThunks } from "../redux/features/users/usersThunks";

export const useModalDelUser = () => {

	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const close = () => {
		setIsOpen(false);
	};

	const open = () => {
		setIsOpen(true);
	}

	const onConfirm = (id) => {
		setIsLoading(true);
		setTimeout(async () => {
			try {
				const { data } = userApi.delete(`/users/${id}`);
				dispatch(getUsersThunks())
			} catch (error) {
				console.log(error);
			}
			setIsLoading(false);
			setIsOpen(false);
		}, 1000);
	}

	return {
		close,
		isLoading,
		isOpen,
		onConfirm,
		open,
	}
}
