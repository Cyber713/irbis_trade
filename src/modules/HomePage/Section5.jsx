import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

import ReusebleCard from '../../components/ReusebleCard'

const Section5 = () => {
    const section5data = [
        {
            id: 1,
            image: "https://pub-5d689109f9c54618b392443e150975a9.r2.dev/images/img1.svg",
            title:"Полный спектр услуг УЭО"
        },
        {
            id: 2,
            image: "https://pub-5d689109f9c54618b392443e150975a9.r2.dev/images/img2.svg",
            title:"Таможенное оформление"
        },
        {
            id: 3,
            image: "https://pub-5d689109f9c54618b392443e150975a9.r2.dev/images/img3.svg",
            title:"Комплексная логистика"
        },
        {
            id: 4,
            image: "https://pub-5d689109f9c54618b392443e150975a9.r2.dev/images/img4.svg",
            title:"Автоперевозки"
        },
        {
            id: 5,
            image: "https://pub-5d689109f9c54618b392443e150975a9.r2.dev/images/img5.svg",
            title:"ЖД-перевозки"
        },
    ]

    useEffect(() => {
        AOS.init({
            duration: 1000,
        })
    }, [])

    return (
        <section className="py-[90px]" data-aos="fade-up">
            <div className="containers">
                {/* Title Section with AOS */}
                <h2 className="uppercase font-bold mb-[20px] text-center text-[34px]" data-aos="fade-up">
                    <span className="text-[#00bfff]">ВОПРОСЫ</span> ПО ТАМОЖЕННОМУ ОФОРМЛЕНИЮ
                </h2>
                <ul className='flex flex-wrap items-center justify-center gap-[20px]'>
                    {section5data.map(item => (
                        <li key={item.id} data-aos="fade-up">
                            <ReusebleCard
                                isBtn={true}
                                imgClass={"w-[75px] mt-[40px] h-[74px]"}
                                item={item}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Section5