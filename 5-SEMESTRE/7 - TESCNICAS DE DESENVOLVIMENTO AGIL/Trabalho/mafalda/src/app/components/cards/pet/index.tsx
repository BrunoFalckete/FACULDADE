import { Button, Card, Image } from "antd";
import Link from "next/link";

interface PetCardProps {
  id: number;
  name: string;
  gender: string;
  year: number;
  kind: string;
  month: number;
  description: string;
  image_url: string;
}

export function PetCard (props: PetCardProps) {
  return (
    <Card key={props.id}>
      <p className="text-2xl font-bold">{props.name}</p>
      <p className="text-1xl">{props.gender}</p>
      <p className="text-1xl">{props.kind}</p>
      <div className="w-full flex items-center justify-center">
        <Image
          src={ props.image_url? props.image_url : 'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=2568&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
          alt="Pets for home"
          style={{ objectFit: 'cover', width: '450px', height: '200px', animation: 'fadeIn 1s' }}
          className="rounded-xl mt-3"
          preview={false}
        />
      </div>
      <Link href={`/feed/${props.id}`}>
          <Button type="dashed" className="w-full mt-3">Ver mais</Button>
      </Link>
    </Card>
  )
}