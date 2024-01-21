import { RightOutlined} from "@ant-design/icons";
import { Button, Card, Carousel } from "antd";
import {PetsService} from "@/services/maricota/pets/pets-service";
import Link from "next/link";

interface PageProps {
  params: {
    id: string;
  }
}

async function getPet(id: string) {
  return await PetsService.getPet(Number(id))
}

export default async function Page({ params }: PageProps) {
  const { data } = await getPet(params.id);

  return(
    <div className="container mx-auto p-5">
      <div className="w-full flex flex-col justify-center items-center mt-5">
        <h1 className="text-3xl font-bold">Este pode ser seu novo Pet</h1>
        <div className="w-full flex justify-center gap-4 mt-5">
          <div className="bg-white w-96 h-96 flex flex-col shadow-md p-10 rounded-md mt-5 text-justify">
             <span className="text-4xl font-bold mb-2">Dados do pet</span>
              <p className="text-1xl mb-1">Nome: {data.name}</p>
              <p className="text-1xl base mb-1">Tipo: {data.kind}</p>
              <p className="text-1xl mb-1">Idade: {data.year}</p>
              <p className="text-1xl mb-1">Sexo: {data.gender}</p>
          </div>
            <div className="w-2/5 mt-5">
                <Carousel autoplay>
                    {data.images.map((file: any) => (
                        <div key={file.id}>
                            <img src={file.url} alt="pet" className="w-full h-96 object-cover" />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
          <div className="w-2/3 flex flex-col mt-10">
              <div className="w-full flex flex-col justify-center items-center">
                  <h1 className="text-3xl font-bold">Requisitos para adoção</h1>
                  <p className="text-xl text-justify mt-5">
                      Adotar um pet é escolher amor, lealdade e uma conexão única. É dar uma segunda chance a um ser que precisa de um lar, tornando a jornada repleta de alegrias e significado.
                  </p>
              </div>
              <div className="w-full flex justify-center">
                  <Link href={`/order-adoption/${data.id}`}>
                    <button className="bg-green-400 flex items-center justify-center p-3 mt-5 rounded-md">Quero adotar <RightOutlined /> </button>
                  </Link>
              </div>
          </div>
      </div>
    </div>
  )
}
