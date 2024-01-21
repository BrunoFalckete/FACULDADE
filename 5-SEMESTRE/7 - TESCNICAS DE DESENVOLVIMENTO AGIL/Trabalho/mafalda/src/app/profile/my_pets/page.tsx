'use client';

import {
  DeleteFilled,
  InfoCircleFilled,
  EditFilled,
  FrownTwoTone,
} from "@ant-design/icons";
import { Button, Result } from "antd";

import { myPetsService } from "@/services/maricota/my-pets/my-pets-service";
import { useEffect, useState } from "react";

export default function Page() {
  const [myPets, setMyPets] = useState([] as any)

  useEffect(() => {
    const fetchData = async() => {
      const response = await myPetsService.getAllMyPets()

      if (response.status == 200) {
        console.log(response.status);
        
        setMyPets(response.data)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="flex justify-center">
        <h1 className="font-bold text-3xl">Esses são seus pets cadastrados</h1>
      </div>

      {myPets.length === 0 ? (
        <Result icon={<FrownTwoTone />} title="Não há pets cadastrados" />
      ) : (
        <div className="flex flex-wrap w-full h-full justify-start mt-8">
          {myPets.map((pet: any) => (
            <div key={pet.id} className="bg-zinc-50 w-80 h-80 mr-8 mb-4 p-4 rounded-3xl border border-zinc-300">
            <div className="flex h-2/6">
              <div className="w-11/12">
                <h1 className="font-bold text-2xl">{pet.name}</h1>
                <h3 className="font-bold">{pet.gender}</h3>
                <p className="text-sm">{pet.kind}</p>
              </div>
              <div className="">
                <Button
                  type="primary"
                  shape="circle"
                  icon={<DeleteFilled />}
                  size={"large"}
                  danger
                />
              </div>
            </div>
            <div className="flex justify-center h-3/6">
              <img src={pet.image_url || ""} className="w-full h-full object-fit" />
            </div>
            <div className="flex justify-center h-1/6 mt-4">
              <Button type="primary" icon={<InfoCircleFilled />} className="w-7/12 mr-11 text-black border-zinc-300 ">
                Informações
              </Button>
              <Button type="primary" icon={<EditFilled />} className="w-5/12 text-black border-zinc-300">
                Editar
              </Button>
            </div>
          </div>
          ))}  
        </div>
      )}
    </div>
  );
}
