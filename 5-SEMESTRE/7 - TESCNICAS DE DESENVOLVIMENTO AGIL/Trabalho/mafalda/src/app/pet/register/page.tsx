"use client";
import { Button, Select, Form, Input, InputNumber, message } from "antd";
import { ArrowRightOutlined, CloseOutlined, UploadOutlined } from "@ant-design/icons";
import { PetsService } from "@/services/maricota/pets/pets-service";
import { PetSaveRequest } from "@/services/maricota/pets/model/pet-save-request";
import { useRouter } from "next/navigation";
import { useState } from "react";


const contentStyle: React.CSSProperties = {
    height: 'auto',
    width: '100px',
    color: 'white',
    backgroundColor: 'purple',
};

const Page = () => {
    const [form] = Form.useForm();
    const router = useRouter();
    const [files, setFiles] = useState([] as any)

    const onFinish = async() => {
      if (files.length === 0) {
        message.error('Insira uma imagem para continuar');
        return false;
      }

      try {
        await form.validateFields();
        const values = form.getFieldsValue();
        const response = await PetsService.save({...values, files: files});

        if (response.status == 201) {   
            message.success('Sucesso ao cadastrar Pet');
            
            setTimeout(() => {
                router.push('/feed');
            }, 2000)
        }
      } catch (error) {
        console.error(error);
        message.success('Erro ao cadastrar o Pet');
      }
    }

    const upload = async (filesList: FileList) => {
      try {
        const { data } = await PetsService.upload(filesList);
        setFiles([...files, data]);
        message.success('Imagem carregada');
      } catch (error) {
        console.error(error);
        message.success('Erro ao carregar a Imagem');
      }
    }

    const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const filesList: FileList | null = event.target.files;

        if (filesList) {
          upload(filesList)
        }
    }

    const handleRemoveImage = (index: number) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);

        setFiles(updatedFiles);
    };

    return (
        <div className="w-full flex flex-col items-center bg-[#F9FAFB] p-11 h-screen">
            <h1 className="text-4xl font-bold">Cadastre seu pet aqui</h1>

            <Form layout='vertical' initialValues={{ remember: true }} form={form} onFinish={onFinish} className='w-2/4 h-full flex flex-col mt-5'>
                <div className="flex">
                    <div className="w-1/2 pr-4">
                        <Form.Item label="Nome" name="name" rules={[{ required: true, message: 'Digite o nome do pet' }]} >
                            <Input placeholder="Nome" className='py-2 px-3 rounded-xl w-100' />
                        </Form.Item>

                        <Form.Item label="Sexo" name="gender" rules={[{ required: true, message: 'Selecione o sexo' }]} >
                            <Select placeholder="Selecione o Sexo" className='rounded-xl w-100'>
                                <Select.Option value="masculino">Masculino</Select.Option>
                                <Select.Option value="feminino">Feminino</Select.Option>
                            </Select>
                        </Form.Item>

                        <Form.Item label="Tipo" name="kind" rules={[{ required: true, message: 'Selecione o tipo' }]} >
                            <Select placeholder="Selecione o Tipo" className='rounded-xl w-100'>
                                <Select.Option value="dog">Cachorro</Select.Option>
                                <Select.Option value="cat">Gato</Select.Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="w-1/2 pr-4">
                        <p className="font-bold">Idade aproximada:</p>

                        <div className="flex">
                            <div className="w-1/2 pr-4">
                                <Form.Item label="Anos" name="year" rules={[{ required: true, message: 'Digite os anos que seu pet tem' }]} >
                                    <InputNumber placeholder="Anos" className='py-1 px-3 rounded-xl w-100' />
                                </Form.Item>
                            </div>
                            <div className="w-1/2 pr-4">
                                <Form.Item label="Meses" name="month" rules={[{ required: true, message: 'Digite os meses que seu pet tem' }]} >
                                    <InputNumber placeholder="Meses" className='py-1 px-3 rounded-xl w-100' />
                                </Form.Item>
                            </div>
                        </div>

                        <Form.Item label="Requisitos da adoção" name="description" rules={[{ required: true, message: 'Digite os requisitos da adoção' }]} >
                            <Input.TextArea placeholder="Requisitos da adoção" className='p-3 rounded-xl w-100' rows={4} />
                        </Form.Item>
                    </div>
                </div>

                <section className="my-5">
                    <label htmlFor="upload-input" className="rounded-xl p-3 my-5 text-center" style={contentStyle}>
                        <UploadOutlined /> Upload
                    </label>
                    <input type="file" id="upload-input" style={{display: 'none'}} onChange={handleUpload} accept="image/*" />
                </section>

                <section className="my-5">
                    {files.map((e, i) => (
                        <div key={i} className="relative inline-block">
                            <img src={e.url} className="w-64 h-64 rounded-md object-cover" alt={`Imagem ${i}`} />
                            <button onClick={() => handleRemoveImage(i)} className="absolute top-2 right-2 bg-red-500 p-1 rounded-full">
                                <CloseOutlined />
                            </button>
                        </div>
                    ))}
                </section>

                <Button htmlType="submit" className='w-max flex justify-center items-center text-black rounded-xl bg-[#17C964] p-5 my-6 md:my-0'>
                    Cadastrar <ArrowRightOutlined />
                </Button>
            </Form>
        </div>
    );
};

export default Page;