'use client';

import { orderAdoptionService } from "@/services/maricota/order-adoption/order-adoption-service";
import { messagesResponse } from "@/utils/messages";
import { statusCode } from "@/utils/status-code";
import { Form , Input, Select, Space, Typography, message} from "antd";
import TextArea from "antd/es/input/TextArea";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface PageProps {
  params: {
    id: string;
  }
}

export default function Page({ params }: PageProps) {

  const [form] = Form.useForm();
  const [typeHouse, setTypeHouse] = useState('house');
  const router = useRouter();

  const onFinish = async (value: any) => {
    const body = {
      ...value,
      typeHouse: typeHouse,
      petId: Number(value.petId),
      other: value.other ? value.other : ""
    }
    const response = await orderAdoptionService.createOrderAdoption(body);

    if (response.status === statusCode.CREATED) {
      message.success(messagesResponse.ORDER_ADOPTION_SUCCESS)
      router.push(`/feed/${params.id}`)
    }else{
      message.error(messagesResponse.ORDER_ADOPTION_ERROR)
    }
  }

  const handleChangeTypeHouse = (value: string) => {
    setTypeHouse(value)
  }

  return(
    <div className="container mx-auto">
      <div className="w-full h-[calc(100vh-100px)] flex justify-center items-center">
        <div className="bg-white w-2/5 flex flex-col shadow-md p-10 rounded-md mt-5 text-justify">
            <Form
              onFinish={onFinish}
              className="w-full flex flex-col"
            >
                <div className="mb-4">
                  <Typography.Text strong style={{fontSize: '24px'}}>Por que você quer adotar este pet?</Typography.Text>
                </div>
                <Form.Item
                  label=""
                  name="text"
                  rules={[{ required: true, message: 'Digite o motivo da adoção' }]}
                >
                  <TextArea placeholder="" className="p-3 rounded-xl" autoSize={{ minRows: 3, maxRows: 5 }}/>
                </Form.Item>
                <Form.Item
                  name="petId"
                  initialValue={params.id}
                  hidden={true}
                >
                  <Input />
                </Form.Item>
                <div className="w-full flex justify-between items-center">
                  <Form.Item
                    name="typeHouse"
                  >
                    <Space wrap >
                      <Select
                        defaultValue={"house"}
                        style={{ width: 200, height: 45, alignItems: 'center' }}
                        options={[
                          { value: 'house', label: 'Casa' },
                          { value: "apartment", label: 'Apartamento' },
                          { value: 'farm', label: 'Sítio' },
                        ]}
                        onChange={handleChangeTypeHouse}
                      >
                      </Select>
                    </Space>  
                  </Form.Item>
                  <Form.Item
                    name="other"
                  >
                    <Input placeholder="No caso de 'outro', especifique" className=" w-full p-3 rounded-xl" />  
                  </Form.Item>                 
                </div>

                <div className="w-full flex justify-center items-center">
                  <button className="bg-green-400 w-full flex items-center justify-center p-3 mt-5 rounded-md">Enviar</button>
                </div>
            </Form>
        </div>
      </div>
    </div>
  )
}