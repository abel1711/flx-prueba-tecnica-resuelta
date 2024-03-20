import { Button, Divider, Flex, Form, Input, Modal, Select, Spin } from 'antd';
import React, { useState } from 'react';

import { Uuid } from '../../../config/adapter/uuid';
import { userApi } from '../../api/user-api';
import './modal-user.css';

export const ModalUser = () => {

    const [showModal, setShowModal] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    const open = () => {
        setShowModal(true);
    }

    const handleOk = async (values) => {
        
        setConfirmLoading(true);

        const body = {
            ...values,
            id: new Uuid().newId()
        }
        //aca manejo el submit
        setTimeout(async () => {
            try {
                const { data } = await userApi.post('/users', body)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
            setConfirmLoading(false);
            setShowModal(false)
        }, 1000);
    }
    return (
        <div>
            <Button type='primary' onClick={() => open()}>
                Agregar Usuario
            </Button>
            <Modal
                destroyOnClose
                centered
                title="Agregar usuario"
                open={showModal}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={() => setShowModal(false)}
                width={'572px'}
                footer={[]}
            >
                <Form name="Form-user" layout="vertical" disabled={confirmLoading} onFinish={handleOk} autoComplete='off'>
                    <Divider />


                    <Flex gap={'large'} >
                        <Form.Item
                            className='item-modal'
                            name='username'
                            label='Usuario'
                            rules={[
                                { required: true, message: 'Por favor ingresa un nombre de usuario' },
                                { whitespace: true, message: 'No pueden haber espacios vacíos' }
                            ]}
                            hasFeedback
                        >
                            <Input placeholder='johndoe' />
                        </Form.Item>
                        <Form.Item
                            className='item-modal'
                            name='email'
                            label='Email'
                            rules={[
                                { required: true, message: 'Por favor ingresa un email' },
                                { whitespace: true, message: 'No pueden haber espacios vacíos' },
                                { type: 'email', message: 'Email no valido' }
                            ]}
                            hasFeedback
                        >
                            <Input placeholder='johndoe@domain.com' />
                        </Form.Item>
                    </Flex>

                    <Flex gap={'large'}>
                        <Form.Item
                            className='item-modal'
                            name='name'
                            label='Nombre'
                            rules={[
                                { required: true, message: 'Por favor ingresa un nombre' },
                                { whitespace: true, message: 'No pueden haber espacios vacíos' }
                            ]}
                            hasFeedback
                        >
                            <Input placeholder='John' />
                        </Form.Item>
                        <Form.Item
                            className='item-modal'
                            name='lastname'
                            label='Apellido'
                            rules={[
                                { required: true, message: 'Por favor ingresa un apellido' },
                                { whitespace: true, message: 'No pueden haber espacios vacíos' }
                            ]}
                            hasFeedback
                        >
                            <Input placeholder='johndoe' />
                        </Form.Item>
                    </Flex>

                    <Flex gap={'large'}>
                        <Form.Item
                            className='item-modal'
                            name='status'
                            label='Estado'
                            rules={[
                                { required: true, message: 'Por favor selecciona un estado' },
                                { whitespace: true, message: 'No pueden haber espacios vacíos' }
                            ]}
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
                        <Form.Item
                            className='item-modal'
                            name='age'
                            label='Edad'
                            rules={[
                                { required: true, message: 'Por favor ingresa una edad' },
                                { whitespace: true, message: 'No pueden haber espacios vacíos' },
                            ]}
                            hasFeedback
                        >
                            <Input placeholder='43' type='number' />
                        </Form.Item>
                    </Flex>
                    <Divider />
                    <Flex
                        justify='flex-end'
                    >   {
                            confirmLoading
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
