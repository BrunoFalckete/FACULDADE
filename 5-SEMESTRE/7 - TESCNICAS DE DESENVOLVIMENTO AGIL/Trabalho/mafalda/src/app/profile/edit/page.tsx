'use client'

import { CurrentUser } from "@/services/maricota/profile/model/current-user";
import { userService } from "@/services/maricota/profile/user-service";
import { messagesResponse } from "@/utils/messages";
import { statusCode } from "@/utils/status-code";
import { Button, Form, Input, Radio, message } from "antd"
import { useEffect, useState } from "react";

export default function Page() {
    const [form] = Form.useForm();
    const [currentTab, setCurrentTab] = useState('your-data');
    const [currentUser, setCurrentUser] = useState({} as CurrentUser);

    const handleTabChange = async (e: any) => {
      setCurrentTab(e.target.value);
    }

    const onFinish = async (value: any) => {
      const keys = ['your-data', 'address']

      const keyPresent = keys.find(key => key in value);

      if (keyPresent) {
        const data = keyPresent === 'address' ? { address: value[keyPresent] || {} } : value[keyPresent];
        const response = await userService.updateUser(data as CurrentUser);

        if (response.status === statusCode.OK) {
          message.success(messagesResponse.UPDATED_SUCCESS);
          setCurrentUser(response.data);
        }
      }
    }

    useEffect(() => {
      const getCurrentUser = async () => {
        try {
          const response = await userService.getUser();
          const userData = response.data;
          setCurrentUser(userData);

        } catch (error) {
          console.error(messagesResponse.SOME_ERROR, error);
        }
      };
    
      getCurrentUser();
    }, [form, currentTab]);

    useEffect(() => {
      form.setFieldsValue({
        'your-data': {
          name: currentUser.name,
          email: currentUser.email,
          cpf: currentUser.cpf,
          phoneNumber: currentUser.phoneNumber,
          birthDate: new Date(currentUser.birthDate).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' }),
        },
        'address': {
          id: currentUser?.address?.id || "",
          cep: currentUser?.address?.cep || "",
          city: currentUser?.address?.city || "",
          state: currentUser?.address?.state || "",
          uf: currentUser?.address?.uf || "",
        }
      })
    }, [form, currentUser])

    return (
        <div className="container mx-auto">
          <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center">
            <div className="flex flex-col justify-center items-center bg-white shadow-2xl sm:w-3/4 sm:h-3/4">
              <Form layout="vertical"
                form={form}
                initialValues={{  remember: true }}
                onFinish={onFinish}
                className=" w-96 h-96"
              >
              <div className=" w-full flex justify-center items-center">
                <Form.Item label="">
                  <Radio.Group onChange={handleTabChange} value={currentTab}>
                  <Radio.Button value="your-data">Seus Dados</Radio.Button >
                  <Radio.Button value="address">Endereço</Radio.Button>
                  </Radio.Group>
                </Form.Item>
              </div>
          
              {currentTab === 'your-data' && (
                  <Input.Group>
                    <Form.Item
                      name={['your-data', 'name']}
                        rules={[{ required: true, message: 'Digite seu nome' }]}
                    >
                      <Input placeholder="Nome Completo" className='p-3 rounded-xl' />
                    </Form.Item>

                    <Form.Item
                      name={['your-data', 'cpf']}
                      rules={[{ required: true, message: 'Digite seu CPF' }]}
                    >
                      <Input placeholder="Cpf" className="p-3 rounded-xl" />
                    </Form.Item>

                    <div className='flex flex-row gap-5'>
                      <Form.Item
                        name={['your-data', 'phoneNumber']}
                        rules={[{ required: true, message: 'Digite seu telefone' }]}
                      >
                        <Input placeholder="Telefone" className="p-3 rounded-xl" />
                      </Form.Item>

                      <Form.Item
                        name={['your-data', 'birthDate']}
                        rules={[{ required: true, message: 'Digite sua data de nascimento' }]}
                      >
                        <Input placeholder="Data de nascimento" className="p-3 rounded-xl"/>
                      </Form.Item>
                    </div>

                    <Form.Item
                      name={['your-data', 'email']}
                      rules={[{ required: true, message: 'Digite seu email' }]}
                    >
                      <Input placeholder="Email" className="p-3 rounded-xl" />
                    </Form.Item>
                </Input.Group>
              )}

              {currentTab === 'address' && (
                <Input.Group>
                <Form.Item
                  name={['address', 'id']}
                  rules={[{ required: true, message: 'Digite seu nome' }]}
                  hidden={true}
                  >

                  <Input />
                  </Form.Item>
                <Form.Item 
                  name={['address', 'cep']}
                  rules={[{ required: true, message: 'Digite sua rua' }]}
                >
                  <Input placeholder="Cep" className="p-3 rounded-xl" />
                </Form.Item>

                <Form.Item 
                  name={['address', 'city']}
                  rules={[{ required: true, message: 'Digite o nome da cidade' }]}
                  >
                  <Input placeholder="Nome da cidade" className="p-3 rounded-xl" />
                </Form.Item>

                <div className='flex flex-row gap-5'>
                  <Form.Item 
                    name={['address', 'state']}
                    rules={[{ required: true, message: 'Digite o estado' }]}
                  >
                    <Input placeholder="Estado" className="p-3 rounded-xl" />
                  </Form.Item>

                  <Form.Item
                    name={['address', 'uf']}
                    rules={[{ required: true, message: 'Digite a UF' }]}
                  >
                    <Input placeholder="UF" className="p-3 rounded-xl" />
                  </Form.Item>
                </div>
               </Input.Group> 
              )}

                <Button  htmlType="submit" className='w-full flex justify-center items-center text-black rounded-xl bg-green-500 p-5'>
                    Editar
                </Button>
              </Form>
            </div>
          </div>
        </div>
    )
}