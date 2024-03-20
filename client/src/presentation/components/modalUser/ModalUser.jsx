import { Button, Divider, Flex, Form, Input, Modal, Select, Spin } from 'antd';
import React from 'react';

import { useModalUser } from '../../hooks/useModalUser';
import './modal-user.css';

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

export const ModalUser = () => {

    const {
        isLoading,
        isOpen,
        rules,
        handleSubmit,
        openModal,
        closeModal,
    } = useModalUser()

    return (
        <div>
            <Button type='primary' onClick={openModal}>
                Agregar Usuario
            </Button>
            <Modal
                destroyOnClose
                centered
                title="Agregar usuario"
                open={isOpen}
                onOk={handleSubmit}
                confirmLoading={isLoading}
                onCancel={closeModal}
                width={'572px'}
                footer={[]}
            >
                <Form
                    name="Form-user"
                    layout="vertical"
                    disabled={isLoading}
                    onFinish={handleSubmit}
                    autoComplete='off'
                >
                    <Divider />
                    <Flex gap={'large'} >
                        <CustomFormItem
                            name='username'
                            label='Usuario'
                            rules={rules.username}
                            placeholder='johndoe'
                        />
                        <CustomFormItem
                            name='email'
                            label='Email'
                            rules={rules.email}
                            placeholder='johndoe@domain.com'
                        />
                    </Flex>

                    <Flex gap={'large'}>
                        <CustomFormItem
                            name='name'
                            label='Nombre'
                            rules={rules.name}
                            placeholder='John'
                        />
                        <CustomFormItem
                            name='lastname'
                            label='Apellido'
                            rules={rules.lastname}
                            placeholder='johndoe'
                        />
                    </Flex>

                    <Flex gap={'large'}>
                        <Form.Item
                            className='item-modal'
                            name='status'
                            label='Estado'
                            rules={rules.status}
                            hasFeedback
                        >
                            <Select
                                placeholder='Seleccione un estado'
                                onChange={() => { }}
                                allowClear
                                options={[
                                    {
                                        value: 'active',
                                        label: 'Activo',
                                    },
                                    {
                                        value: 'inactive',
                                        label: 'Inactivo',
                                    },
                                ]}
                            />
                        </Form.Item>

                        <CustomFormItem
                            name='age'
                            label='Edad'
                            rules={rules.age}
                            placeholder='43'
                            type='number'
                        />

                    </Flex>
                    <Divider />
                    <Flex
                        justify='flex-end'
                    >
                        {
                            isLoading
                                ? (<Spin size='large' />)
                                : (
                                    <Button key="submit" type="primary" htmlType="submit">
                                        Agregar usuario
                                    </Button>
                                )
                        }
                    </Flex>
                </Form>
            </Modal>
        </div>
    )
}
