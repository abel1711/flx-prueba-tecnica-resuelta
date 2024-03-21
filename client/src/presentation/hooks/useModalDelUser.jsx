import { useState } from "react";
import { useDispatch } from "react-redux";
import { userApi } from "@config";
import { getUsersThunks } from "@redux";

export const useModalDelUser = () => {

	const dispatch = useDispatch();
	const [isOpen, setIsOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const close = () => {
		setIsOpen(false);
	};

	const open = () => {
		setIsOpen(true);
	};

	const onConfirm = (id) => {
		setIsLoading(true);
		setTimeout(async () => {
			try {
				await userApi.delete(`/users/${id}`);
				/**
				 * En este punto Json-server no me devuelve "{}" por eso se hace el dispatch para traer
				 * nuevamente los usuarios
				 */
				dispatch(getUsersThunks());
			} catch (error) {
				/**
				 * Aca va la logica para mostarle al usuario si algo salio mal.
				 */
				console.log(error);
			}
			setIsLoading(false);
			setIsOpen(false);
		}, 1000);
	};

	return {
		close,
		isLoading,
		isOpen,
		onConfirm,
		open,
	};
};
