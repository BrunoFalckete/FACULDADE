"use client";

import Image from 'next/image'
import IconPets4Home from '../../../../public/pets-4-home.svg'
import ImageMyPet from '../../../../public/my-pet.png'
import { Button, Form, Input, Radio, message } from 'antd'
import { useState } from 'react';
import { RightOutlined } from '@ant-design/icons';
import { IAddress, IFinish, IYourData } from './@types/register-types';
import { AuthServiceImp } from '@/services/maricota/auth/auth-service';

export default function Register() {

  const [form] = Form.useForm();

  const [currentTab, setCurrentTab] = useState('your-data');

  const [formData, setFormData] = useState({
    'your-data': {} as IYourData,
    'address': {} as IAddress,
    'finish': {} as IFinish,
  });

  const handleTabChange = async (e: any) => {
    await form.validateFields();
    setCurrentTab(e.target.value);
  };

  const onFinish = async () => {
    try{
      const {name, cpf, phoneNumber, birthDate, email} = form.getFieldValue(['your-data']) as IYourData;
      const {cep, city, state, uf} = form.getFieldValue(['address']) as IAddress;
      const {username, password, confirmPassword} = form.getFieldValue(['finish']) as IFinish;
      
      const data: any = {
        name,
        cpf,
        phoneNumber,
        birthDate,
        email,
        address: {
          cep,
          city,
          state,
          uf
        },
        username,
        password,
        passwordConfirmation: confirmPassword
      }

      await AuthServiceImp.signUp(data);
      message.success('Sucesso ao cadastrar usuário');
      
      setTimeout(() => {
        window.location.href = '/feed';
      }, 2000);
    } catch(error) {
      console.log(error);
      message.error('Erro ao cadastrar usuário');
    }
  }

  const handleNext = async() => {
    try {
      await form.validateFields();

      setFormData((prevData) => ({
        ...prevData,
        [currentTab]: form.getFieldsValue(),
      }));

      if (currentTab === 'your-data') setCurrentTab('address');
      else if (currentTab === 'address') setCurrentTab('finish');
    } catch (error) {
      console.error('Por favor, preencha todos os campos antes de avançar.');
    }
  };

  return (
    <div className="bg-slate-100 h-screen flex justify-center items-center">
      <div className="flex bg-white shadow-2xl sm:w-3/4 sm:h-3/4">
        <div className="w-full p-5 flex-1 h-full sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center">
          <div className="flex flex-col justify-center items-center">
            <Image src={IconPets4Home} alt="Pets for home" />
            <h1 className="text-3xl text-black font-bold md:text-center sm:text-center">Seja bem vindo ao pets for home</h1>
          </div>

          <Form layout='vertical'
              form={form}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              className='w-2/3 h-full flex flex-col justify-center items-center'
            >
              <Form.Item label="">
                <Radio.Group  onChange={handleTabChange} value={currentTab}>
                <Radio.Button value="your-data">Seus Dados</Radio.Button >
                <Radio.Button value="address">Endereço</Radio.Button>
                <Radio.Button value="finish">Finalizar Cadastro</Radio.Button>
                </Radio.Group>
              </Form.Item>

              {currentTab === 'your-data' && (
                  <Input.Group>
                    <Form.Item
                      name={['your-data', 'name']}
                      rules={[{ required: true, message: 'Digite seu nome' }]}
                    >
                      <Input placeholder="Nome Completo" className='p-3 rounded-xl'/>
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

              {currentTab === 'finish' && (
                <Input.Group>
                  <Form.Item
                    name={['finish', 'username']}
                    rules={[{ required: true, message: 'Digite seu nome de usuário' }]}
                    >
                    <Input placeholder="Nome de usuário" className="p-3 rounded-xl" />
                  </Form.Item>

                  <Form.Item
                    name={['finish', 'password']}
                    rules={[{ required: true, message: 'Digite sua senha' }]}
                  >
                    <Input.Password placeholder="Senha" className="p-3 rounded-xl" />
                  </Form.Item>

                  <Form.Item
                    name={['finish', 'confirmPassword']}
                    rules={[{ required: true, message: 'Confirme sua senha' }]}
                  >
                    <Input.Password placeholder="Confirme sua senha" className="p-3 rounded-xl" />
                  </Form.Item>
                </Input.Group> 
              )}

              {currentTab !== 'finish' && (
                <Button onClick={handleNext} className='w-full flex justify-center items-center text-black rounded-xl bg-green-500 p-5'>
                  Próximo <RightOutlined />
                </Button>
              )}

              {currentTab === 'finish' && (
                <Button  htmlType="submit" className='w-full flex justify-center items-center text-black rounded-xl bg-green-500 p-5'>
                 Cadastrar
               </Button>
              )}
            </Form>
        </div>

        <div className='w-1/2 h-full relative hidden lg:block'>
          <Image src={ImageMyPet} alt='my-pet' layout='fill' className='rounded-l-3xl'/>
        </div>
      </div>
    </div>
  )
}