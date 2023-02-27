import React, { useState, useEffect } from 'react'
import Logo from "../assets/image/logo.png"
import { MoonStars, Sun } from 'tabler-icons-react';
import { Switch, Group, useMantineColorScheme, useMantineTheme } from '@mantine/core';
import { Link } from 'react-router-dom'
function Navbar() {
    const [them, setThem] = useState("light")

    useEffect(() => {
        if (them === "dark") {
            document.documentElement.classList.add("dark")
        } else (
            document.documentElement.classList.remove("dark")
        )
        console.log(them)
    }, [them])


    const handleThemSwich = () => {
        setThem(them === "dark" ? "light" : "dark")
    }

    return (
        <div className='shadow-lg bg-white dark:bg-slate-800 fixed w-full z-50'>
            <div className='container mx-auto flex justify-between items-center p-2'>
                <div>
                    <img src={Logo} alt="" className='w-16' />
                </div>
                <div>
                    <ul className='flex items-center text-xl dark:text-slate-200'>
                        <li className='mr-5'>
                            <Link to={"/"}>Главное</Link>
                        </li>
                        <li className='mr-5'>
                            <Link to="Contact">Контакты</Link>
                        </li>
                        <li className='mr-5'>
                            <Link to="About">О нас</Link>
                        </li>
                        <li className='mr-5'>
                            <Link to="">Главное</Link>
                        </li>
                        <Group position="center" className='mr-10' >
                            <Switch
                                onChange={() => handleThemSwich()}
                                size="lg"
                                onLabel={<Sun size={20} strokeWidth={1.5} color={"white"} />}
                                offLabel={<MoonStars size={20} strokeWidth={1.5} color={"black"} />}
                            />
                        </Group>

                        <button
                            className='rounded-lg bg-amber-600
                            text-white p-2'
                        >
                            dsadsadasd
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar