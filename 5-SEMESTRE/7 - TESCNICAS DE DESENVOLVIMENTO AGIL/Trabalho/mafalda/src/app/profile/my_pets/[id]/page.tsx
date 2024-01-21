'use client'

import { MyPetResponse } from "@/services/maricota/my-pets/model/my-pet-response"
import { myPetsService } from "@/services/maricota/my-pets/my-pets-service"
import { statusCode } from "@/utils/status-code"
import { QuestionCircleOutlined } from "@ant-design/icons"
import { Button, Image, Table, Modal, message } from "antd"
import { useEffect, useState } from "react"

interface Props {
  params: {
    id: string
  }
}
export default function Page({ params: { id } }: Props) {
  const [pet, setPet] = useState({} as MyPetResponse)
  const [acceptingAdoption, setAcceptingAdoption] = useState(false);

  useEffect(() => {
    const getPet = async () => {
      try {
        const response = await myPetsService.getMyPet(Number(id))
        setPet(response.data)
      } catch (error) {
        console.error(error)
      }
    }
    getPet()
  }, [id])


  //const shouldRenderAdoption = pet.orderAdoption?.every((i: any) => !i.chosen);

  const dataSource = pet.orderAdoption?.map((i: any) => ({
    key: i.id.toString(),
    orderAdoptionId: i.id, 
    id: i.user.id,
    name: i.user.name,
    email: i.user.email,
    adoptionText: i.text,
    allProps: {
      orderAdoptionId: i.id, 
      id: i.user.id,
    },
    alreadyChosen: i.chosen
  }))
  
  const columns = [
    {
      title: 'ID do usuário',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Visualizar texto de adoção',
      dataIndex: 'adoptionText',
      key: 'adoptionText',
      render: (adoptionText: string) => (
        <Button onClick={() => handleTextAdoption(adoptionText)} type="default">
          <QuestionCircleOutlined />
        </Button>
      )
    },
    {
      title: 'Ações',
      dataIndex: 'allProps',
      key: 'allProps',
      render: (allProps: any) => (
          <div className="flex flex-row gap-2">
            <Button
              type="dashed"
              className="bg-blue-500"
              onClick={async () => {
                if (!acceptingAdoption) {
                  setAcceptingAdoption(true);
                  await handleAcceptAdoption(allProps.orderAdoptionId, allProps.id);
                  setAcceptingAdoption(false);
                }
              }}
              disabled={dataSource.some((item => item.alreadyChosen))}
            >
              Aceitar
            </Button>
          </div>
        )
    }
  ];

  const handleTextAdoption = (text: string) => {
    Modal.info({
      title: 'Texto de Adoção',
      content: (
        <div className="p-4 max-h-screen overflow-auto text-justify">
          <span className="text-lg">{text}</span>
        </div>
      ),
      onOk() {},
      width: 800,
      style: { top: 20, boxShadow: 'none' },
      mask: false,
      okButtonProps: {
        className: 'bg-blue-500 text-white',
        style: { boxShadow: 'none' },
      },
    });
  }

  const handleAcceptAdoption = async (orderAdoptionId: number, userId: number) => {
    await myPetsService.createOrderAdoption(orderAdoptionId, parseInt(id), userId);
  };

  return(
    <div className="container mx-auto">
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-center items-center mt-10">
          <h1 className="text-3xl font-bold">Informações sobre esse pet</h1>
        </div>

        <div className="w-full flex justify-around mt-10 gap-5">
        <div className="bg-white flex flex-1 justify-between p-10 shadow-lg rounded-md">
          <div className="flex flex-1 flex-col">
            <p>Nome: {pet.name}</p>
            <p>Tipo: {pet.kind}</p>
            <p>Idade: {pet.year}</p>
            <p>Sexo: {pet.gender} </p>
          </div>
          <div className="flex-shrink-0 ml-6">
            <Image src={pet.image_url} 
            width={300} height={300} alt="get-dog" />
          </div>
        </div>
      
          <div className="w-1/2 flex flex-col">
            <div className="w-full flex justify-center">
              <h1 className="text-2xl font-bold">Requisitos para adoção</h1>
            </div>

            <div className="w-full flex justify-center mt-5">
            <p className="text-xl text-justify">
              {pet.description}
            </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-10">
          <Table dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </div>
  )
}