"use client";
import { Avatar, Button, Card, Carousel } from "antd";
import { ArrowRightOutlined, UserOutlined } from "@ant-design/icons";

const contentStyle: React.CSSProperties = {
    height: "235px",
    color: '#fff',
    textAlign: 'center',
    background: '#364d79',
};

const Page = () => {
    return (
        <div>
            <div className="w-full flex flex-col items-center bg-[#F9FAFB] p-11 h-screen">
                <div className="max-w-4xl flex flex-col items-center">
                    <h1 className="text-2xl font-bold">Esse pode ser seu novo pet</h1>
                    <div className="max-w-max flex gap-14">
                        <Card className="max-w-max px-10" title="Dados do Pet" bordered={false}>
                            <p>Nome: Caramelo</p>
                            <p>Tipo: Canino</p>
                            <p>Idade: 2 anos</p>
                            <p>Sexo: Macho</p>
                            <div className="flex gap-3 items-center "><UserOutlined /><p>sergio_ifms</p></div>
                        </Card>
                        <Carousel autoplay className="w-96 ">
                            <div>
                                <h3 style={contentStyle}>1</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>2</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>3</h3>
                            </div>
                            <div>
                                <h3 style={contentStyle}>4</h3>
                            </div>
                        </Carousel>
                    </div>
                </div>
                <div className="max-w-4xl flex flex-col items-center">
                    <h2 className="text-1xl font-bold">Requisitos da adoção</h2>
                    <p className="text-1xl font-regular">Mussum Ipsum, cacilds vidis litro abertis.  Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Sapien in monti palavris qui num significa nadis i pareci latim. Morbi viverra placerat justo, vel pharetra turpis.</p>
                </div>
                <Button htmlType="submit" className='w-max flex justify-center items-center text-black rounded-xl bg-[#17C964] p-5 mx-4 my-6 md:my-0'>
                    Quero adotar <ArrowRightOutlined />
                </Button>
            </div>
        </div>
    );
};

export default Page;