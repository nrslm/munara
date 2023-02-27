import React, { useEffect, useState } from 'react'
import { Phone, Message2Share, Location, BrandInstagram, BrandWhatsapp } from 'tabler-icons-react'
import { TextInput, Checkbox, Textarea } from '@mantine/core'
import axios from 'axios'
function Contact() {
    let text = "https://api.telegram.org/bot5702364807:AAHJWVLqpjZngGZKj8F18H-iay_nlWDHTFM/sendMessage?chat_id=-863875162&text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82%20%D0%BC%D0%B8%D1%80"
    const [userName, setUserName] = useState("")
    const [userPhone, setUserPhone] = useState()
    const [userGmail, setUserGmail] = useState()
    const [userThemAsk, setUserThemAsk] = useState([])
    const [userDescription, setUserDescription] = useState()

    const handleClickSendForm = () => {
        axios.post(`https://api.telegram.org/bot5702364807:AAHJWVLqpjZngGZKj8F18H-iay_nlWDHTFM/sendMessage`,
            {
                "chat_id": -863875162,
                "text": `<b>ФИО:</b> ${userName}\n<b>Gmail:</b> ${userGmail}\n<b>Телефон номер:</b> ${userPhone} \n<b>По какому тему:</b> ${userThemAsk.map((item) => { return (" " + item) })} \n<b>Описание:</b> ${userDescription}`,
                "parse_mode": "HTML"
            }
        )
    }
    const addCheck = (text,) => {
        setUserThemAsk(old => [...old, text])
    }
    const delCheck = (text) => {
        setUserThemAsk(userThemAsk.filter((item) => item != text))
    }
    console.log(userThemAsk)

    return (
        <div className='bg-gray-50 pb-16'>
            <div className='pt-20 sm:pt-38 lg:pt-40 xl:pt-40 container mx-auto '>
                <div className='text-center'>
                    <h1 className='text-5xl mb-5 font-bold'>Связаться с нами</h1>
                    <p className='text-slate-600 text-xl'>
                        Любые вопросы или замечания? Просто напишите нам сообщение!
                    </p>
                </div>
                <div className='grid mt-10 grid-cols-1 sm:grid-cols-1 lg:grid-cols-5   p-4 bg-white  rounded-xl shadow-sm shadow-gray-700'>
                    <div className='col-span-2 bg-slate-800 rounded-xl text-white p-10'>
                        <h1 className='font-bold'>Контакты</h1>
                        <p className='text-slate-200 text-xl'>
                            заполните форму, и наша команда свяжется с вами в течение 24 часов
                        </p>
                        <div>
                            <div className='flex content-center  items-center my-4 gap-4 mt-10'>
                                <div className='flex items-center gap-4'>
                                    <Phone
                                        size={30}
                                        strokeWidth={2}
                                        color={'orange'}
                                    />
                                    <div className='flex flex-col'>
                                        <a href='tel:' className='text-xl'>+996706690287</a>
                                        <a href='tel:' className='text-xl'>+996706690287</a>
                                    </div>
                                </div>
                            </div>
                            <div className='flex content-center items-center my-4 gap-4 flex-wrap'>
                                <Message2Share
                                    size={30}
                                    strokeWidth={2}
                                    color={'orange'}
                                />
                                <a href='tel:' className='text-xl'>munara_stroy_osh@gmail.com</a>
                            </div>
                            <div className='flex content-center items-center my-4 gap-4'>
                                <Message2Share
                                    size={30}
                                    strokeWidth={2}
                                    color={'orange'}
                                />
                                <a href='tel:'>+996706690287</a>
                            </div>
                            <div className='flex content-center items-center my-4 gap-4'>
                                <Location
                                    size={30}
                                    strokeWidth={2}
                                    color={'orange'}
                                />
                                <a href='https://go.2gis.com/kuazzn' target={"_blank"} className='text-xl'>г.Ош, ул. А.Навои 25а</a>
                            </div>
                        </div>

                        <div className='flex gap-4 mt-16 w-full justify-end'>
                            <BrandWhatsapp
                                size={48}
                                strokeWidth={2}
                                color={'white'}
                            />

                            <BrandInstagram
                                size={48}
                                strokeWidth={2}
                                color={'white'}
                            />
                        </div>
                    </div>
                    <div className='col-span-3 p-10'>
                        <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-6 '>
                            <div className='col-span-2'>
                                <TextInput
                                    value={userName}
                                    onChange={(e) => setUserName(e.currentTarget.value)}
                                    placeholder="Обезательно!"
                                    label="Фамилия имя"
                                    size="md"
                                    withAsterisk
                                />
                            </div>
                            <TextInput
                                value={userGmail}
                                onChange={(e) => setUserGmail(e.currentTarget.value)}
                                placeholder="Не обезательно!"
                                label="Gmail"
                                size="md"
                                withAsterisk
                            />
                            <TextInput
                                type={"number"}
                                value={userPhone}
                                onChange={(e) => setUserPhone(e.currentTarget.value)}
                                placeholder="Обезательно!"
                                label="Номор телефона"
                                size="md"
                                withAsterisk
                            />
                        </div>
                        <p className='mt-6 font-semibold'>
                            По каким вопросом обращайтесь? (не обезательно!)
                        </p>
                        <div className='flex flex-wrap gap-4 mt-4'>
                            <Checkbox
                                onChange={(event) => event.currentTarget.checked ? addCheck("Объект АБАД") : delCheck("Объект АБАД")}
                                label=" Объект АБАД"
                                color="orange"
                                size="md"
                            />
                            <Checkbox
                                onChange={(event) => event.currentTarget.checked ? addCheck("Объект Sun House") : delCheck("Объект Sun House")}
                                label=" Объект Sun House"
                                color="orange"
                                size="md"
                            />
                            <Checkbox
                                onChange={(event) => event.currentTarget.checked ? addCheck("Консультатция") : delCheck("Консультатция")}
                                label="Консультатция"
                                color="orange"
                                size="md"
                            />
                            <Checkbox
                                onChange={(event) => event.currentTarget.checked ? addCheck("Другое") : delCheck("Другое")}
                                label="Другое"
                                color="orange"
                                size="md"
                            />
                        </div>
                        <div className='mt-6'>
                            <Textarea
                                value={userDescription}
                                onChange={(e) => setUserDescription(e.currentTarget.value)}
                                placeholder="Не обязательно!"
                                label="Сообщение"
                                size="md"
                                withAsterisk
                            />
                        </div>
                        <div className='flex justify-center mt-6'>
                            <button onClick={() => handleClickSendForm()} className='text-xl text-white font-bold px-8 py-3 rounded-lg bg-amber-600'>
                                Отправить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact