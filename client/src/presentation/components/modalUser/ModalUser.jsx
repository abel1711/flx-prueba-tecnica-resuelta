import {
    Button,
    Divider,
    Flex,
    Form,
    Input,
    Modal,
    Select,
    Spin
} from 'antd';
import { useModalUser } from '../../hooks/useModalUser';

import './modal-user.css';

/**
 * no se exporto este componente porque solo se usa en este modal 
 */

const CustomFormItem = ({ name = '', label = '', rules = [], placeholder = '', type = '' }) => {
    return (
        <Form.Item
            className='item-modal'
            name={name}
            label={label}
            rules={rules}
            hasFeedback
            required={false} // para que no muestre el * rojo asi se parece mas al diseño de figma, lo mismo es requerido mediante las rules
        >
            <Input placeholder={placeholder} type={type} />
        </Form.Item>
    )
}

/**
 * no se exporto este componente porque solo se usa en este modal 
 */

const CustomFlex = ({ children, justify }) => {
    return (
        <Flex gap={'large'} justify={justify}>
            {children}
        </Flex>
    );
}

export const ModalUser = ({ user, labelButton = 'Agregar Usuario', typeButton = 'primary', editMode = false }) => {

    const {
        isLoading,
        isOpen,
        RULES,
        INITIALFORM,
        SELECT_OPTIONS,
        handleSubmit,
        openModal,
        closeModal,
    } = useModalUser();

    const labelModal = editMode ? 'Editar usuario' : 'Agregar usuario';

    return (
        <>
            <Button type={typeButton} onClick={openModal}>
                {labelButton}
            </Button>
            <Modal
                destroyOnClose
                centered
                title={labelModal}
                open={isOpen}
                confirmLoading={isLoading}
                onCancel={closeModal}
                width={'572px'}
                footer={null}
            >
                <Form
                    name="Form-user"
                    layout="vertical"
                    disabled={isLoading}
                    onFinish={(values) => handleSubmit(values, user)}
                    autoComplete='off'
                    initialValues={user ? user : INITIALFORM}
                >
                    <Divider />
                    <CustomFlex >
                        <CustomFormItem
                            name='username'
                            label='Usuario'
                            rules={RULES.username}
                            placeholder='johndoe'
                        />
                        <CustomFormItem
                            name='email'
                            label='Email'
                            rules={RULES.email}
                            placeholder='johndoe@domain.com'
                        />
                    </CustomFlex>

                    <CustomFlex >
                        <CustomFormItem
                            name='name'
                            label='Nombre'
                            rules={RULES.name}
                            placeholder='John'
                        />
                        <CustomFormItem
                            name='lastname'
                            label='Apellido'
                            rules={RULES.lastname}
                            placeholder='johndoe'
                        />
                    </CustomFlex>

                    <CustomFlex >
                        <Form.Item
                            className='item-modal'
                            name='status'
                            label='Estado'
                            rules={RULES.status}
                            hasFeedback
                            required={false}
                        >
                            <Select
                                placeholder='Seleccione un estado'
                                onChange={() => { }}
                                allowClear
                                options={SELECT_OPTIONS}
                            />
                        </Form.Item>

                        <CustomFormItem
                            name='age'
                            label='Edad'
                            rules={RULES.age}
                            placeholder='43'
                            type='number'
                        />

                    </CustomFlex>
                    <Divider />
                    <CustomFlex
                        justify='flex-end'
                    >
                        {
                            isLoading
                                ? (<Spin size='large' />)
                                : (
                                    <Button key="submit" type="primary" htmlType="submit">
                                        {labelModal}
                                    </Button>
                                )
                        }
                    </CustomFlex>
                </Form>
            </Modal>
        </>
    )
}
