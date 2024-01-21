"use client";

import Image from 'next/image'
import IconPets4Home from '../../../../public/pets-4-home-light.svg'
import React, { useState } from 'react';
import { EditFilled, EditOutlined, HomeFilled, HomeOutlined, InfoCircleFilled, InfoCircleOutlined, MenuOutlined, PlusCircleFilled, PlusCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import Link from 'next/link';

const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <Link className='md:flex md:items-center md:justify-between gap-4 p-2' href="/profile/edit">
                Editar Perfil <EditFilled />
            </Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link className='md:flex md:items-center md:justify-between gap-4 p-2' href="/profile/my_pets">
                Pets cadastrados <InfoCircleFilled />
            </Link>
        ),
    },
];

const MobileNavbarMenu = () => {
    return (
        <div className='p-4 space-y-2 md:hidden text-white text-lg font-bold'>
            <Link href="/feed" className='py-1'><HomeOutlined /> <span className='px-2'>Voltar ao início</span></Link>
            <Link href="/pet/register" className='py-1'><PlusCircleOutlined /> <span className='px-2'>Cadastrar um pet</span></Link>
            <Link href="/profile/edit" className='py-1'><EditOutlined /> <span className='px-2'>Editar perfil</span></Link>
            <Link href="/profile/my_pets" className='py-1'><InfoCircleOutlined /> <span className='px-2'>Pets cadastrados</span></Link>
        </div>
    );
}

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="px-16 py-4 bg-sky-600 shadow md:flex md:items-center md:justify-around">
            <div className='flex justify-between items-center'>
                <div className='md:flex md:items-center'>
                    <Image className='h-16 w-max cursor-pointer' src={IconPets4Home} alt="Pets for home" />
                </div>
                <span className='text-3x1 cursor-pointer mx-2 md:hidden block'>
                    <MenuOutlined className='bg-[#ffffff] p-3 rounded-md' onClick={toggleMenu} />
                </span>
            </div>
            <div className="md:flex md:items-center z-[1] md:z-auto md:static absolute bg-navbar w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500">
                <Link href="/feed">
                    <Button className='w-max flex justify-center items-center text-black rounded-xl bg-[#ffffff] p-5 mx-4 my-6 md:my-0'>
                        <HomeFilled /> Voltar ao início
                    </Button>
                </Link>
                <Link href="/pet/register">
                    <Button className='w-max flex justify-center items-center text-black rounded-xl bg-[#ffffff] p-5 mx-4 my-6 md:my-0'>
                        Cadastrar um Pet <PlusCircleFilled />
                    </Button>
                </Link>
                <Dropdown menu={{ items }} placement="bottomRight" arrow={{ pointAtCenter: true }}>
                    <Avatar className='flex justify-center items-center cursor-pointer bg-avatar p-5 mx-4 my-6 md:my-0' icon={<UserOutlined />} />
                </Dropdown>
            </div>
            {isMenuOpen && <MobileNavbarMenu />}
        </nav>
    );

};
export default Navbar;