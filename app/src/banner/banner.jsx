import { useEffect, useState } from 'react'
import style from './banner.module.css'






const Banner = () =>{

    let [data, setData] = useState(false)
    
    useEffect(()=>{
        setData(true)
    },[])

    return <section className={style.section}>
        <div className={style.wrapper} style={{opacity: data === true ? 1 : 0}}>
            <h1 className={style.tittle}>ВИНОГРАДОВ ИВАН ( ХОЧУ СНЯТЬ ВАШУ КОМНАТУ )</h1>
            <p className={style.text}>
                Здравствуйте, приятно познакомиться, меня зовут Ваня. Скорее всего вы перешли на этот сайт с QR-кода на объявлении вашего дома.
                Я очень надеюсь, что смогу снять вашу комнату до 150$. Предлагаю вам ознакомиться со мной. Я расскажу о себе и почему стоит сдать комнату мне 
                в следующих блоках этого сайта
            </p>
            <p className={style.text}>
                Я создал этот сайт, чтобы вы не выбрали меня «на авось» по одному объявлению, а могли спокойно почитать, 
                кто я, как живу и чего хочу от проживания. Здесь вы увидите не рекламу, а максимально честный рассказ о 
                том, как я отношусь к аренде, к деньгам и к чужой квартире. Если после прочтения у вас не останется вопросов — 
                значит, мы подходим друг другу
            </p>
            <div className={style.button_wrapper}>
                <p className={style.button}><a target="_blank" href="tel:+375259303911">+375 (25) 930-39-11</a></p>
                <p className={style.button}><a target="_blank" href="https://www.telegram.me/perry_yani">Telegram</a></p>
                <p className={style.button}><a target="_blank" href="viber://chat?number=375259303911">Viber</a></p>
            </div>
        </div>
        
    </section>

}

export default Banner