import { Button, Divider, Modal, Typography } from "antd";
import { useModalDelUser } from "@hooks";

export const ModalDelUser = ({ user }) => {

    const {
        close,
        open,
        isOpen,
        onConfirm,
        isLoading
    } = useModalDelUser();

    return (
        <div>
            <Button type='link' onClick={open}>
                Eliminar
            </Button>
            <Modal
                destroyOnClose
                centered
                title={'Eliminar usuario'}
                open={isOpen}
                confirmLoading={isLoading}
                onOk={() => onConfirm(user.id)}
                onCancel={close}
                width={'438px'}
                okText='Eliminar'
                cancelText='Cancelar'
                okType="primary"
                okButtonProps={{
                    danger: true
                }}
            >
                <Divider />
                <Typography.Text strong>
                    Está seguro que quiere eliminar el usuario <Typography.Text type='danger'>@{user.username}</Typography.Text>?
                </Typography.Text>
                <Divider />
            </Modal>

        </div>
    );
};
