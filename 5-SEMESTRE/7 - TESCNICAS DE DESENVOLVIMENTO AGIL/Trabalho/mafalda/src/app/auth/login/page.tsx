'use client';

import IconPets4Home from '../../../../public/pets-4-home.svg'
import ImageMyPet from '../../../../public/my-pet.png'
import Image from 'next/image'
import { Button, Form, Input, message } from 'antd'
import Link from 'next/link';
import { AuthServiceImp } from '@/services/maricota/auth/auth-service';

export default function Login(){
  const [form] = Form.useForm();

  const onFinish = async() => {
    try {
      await form.validateFields();
      const values = form.getFieldsValue();
      const response = await AuthServiceImp.signIn(values);

      if (response.status === 201) {
        window.location.href = '/feed';
      } else {
        message.error('Usuário ou senha inválidos');
      }
    } catch (error) {
    }
  }

  return (
    <div className="bg-slate-100 h-screen flex justify-center items-center">
      <div className="bg-white shadow-2xl w-3/4 h-3/4 flex">
        <div className="w-full p-5 flex-1 h-full sm:flex sm:flex-col sm:items-center md:flex md:flex-col md:items-center">
          <div className="flex flex-col justify-center items-center">
            <Image src={IconPets4Home} alt="Pets for home" />
            <h1 className="text-3xl text-black font-bold md:text-center sm:text-center">Seja bem vindo ao pets for home</h1>
          </div>
                
            <Form layout='vertical' initialValues={{ remember: true }} form={form} onFinish={onFinish} className='w-2/4 h-full flex flex-col mt-20'>
              <Input.Group>
                <Form.Item name="username" rules={[{ required: true, message: 'Digite seu username' }]} >
                  <Input placeholder="username" className='p-3 rounded-xl w-100' />
                </Form.Item>

                <Form.Item name="password" rules={[{ required: true, message: 'Digite sua senha' }]} >
                  <Input.Password placeholder="Senha" className='p-3 rounded-xl' />
                </Form.Item>
              </Input.Group>

              <div className="flex flex-row items-center justify-between">
                <Link href='/auth/register'>Registre-se</Link>

                <Button htmlType="submit" className='w-32 flex justify-center items-center text-black rounded-xl bg-green-500 p-5'>
                  Logar
                </Button>
              </div>
            </Form>
        </div>

        <div className='w-1/2 h-full relative hidden lg:block'>
          <Image src={ImageMyPet} alt='my-pet' layout='fill' className='rounded-l-3xl'/>
        </div>
      </div>
    </div>
  )
}