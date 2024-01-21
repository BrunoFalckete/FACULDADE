'use client';

import { PetResponse } from "@/services/maricota/pets/model/pet-response";
import { PetsService } from "@/services/maricota/pets/pets-service";
import { FrownTwoTone } from "@ant-design/icons";
import { Select, Space, Pagination, Result } from "antd";
import { useEffect, useState } from "react";
import { PetCard } from "../components/cards/pet";

export default function Page() {

  const [currentPage, setCurrentPage] = useState(1);
  const [kind, setKind] = useState<string>('dog');
  const [pets, setPets] = useState<PetResponse[]>([]);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PetsService.getAll({ q: kind, page: currentPage });
        
        setIsEmpty(response.meta === 0);

        setPets(response.data);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, [currentPage, kind]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-3xl font-bold">Escolha um bichinho para adotar!</h1>
        <Space wrap >
          <Select 
            defaultValue={"dog"}
            style={{ width: 120, height: 45, alignItems: 'center' }}
            options={[
              { value: 'cat', label: 'gato' },
              { value: "dog", label: 'cachorro' },
              { value: 'other', label: 'outros' },
            ]}
            onChange={(event => setKind(event))}
          />
        </Space>        
      </div>

      <div className="grid grid-cols-3 gap-4 mt-10">
        {pets.map((pet: any) => (
          <PetCard key={pet.id} {...pet} />
        ))}
      </div>

      <div className="w-full flex justify-center items-center mt-10">        
        {isEmpty ? (<Result icon={<FrownTwoTone />} title="Nenhum pet foi encontrado!" />) 
        : (<Pagination defaultCurrent={1} total={20} onChange={handlePageChange}/>)
        }
      </div>
    </div>
  )
}
