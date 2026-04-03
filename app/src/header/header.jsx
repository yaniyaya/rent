import { useState } from 'react'
import style from './header.module.css'



const Header = () =>{
    

    let [Status, setStatus] = useState(false)



    return  <section className={style.section}>
                <div className={style.wrapper}>
                    <div className={style.div} onClick={()=>setStatus(!Status)}>
                        {Status && 
                        <div className={style.bar}  
                            style={{opacity: Status === true ? 1 : 0}}
                        >
                            <p className={style.bar_text}>Мои контакты:</p>
                            <a target='_blank' href='https://www.instagram.com/perry_virid/' className={style.bar_card}>Instagram</a>
                            <a target='_blank' href='tel:+375259303911' className={style.bar_card}>+375 (25) 930-39-11</a>
                            <a target='_blank' href='https://www.telegram.me/perry_yani' className={style.bar_card}>Telegram</a>
                            <a target='_blank' href='viber://chat?number=375259303911' className={style.bar_card}>Viber</a>
                        </div>}
                        <p className={style.name}>КОНТАКТЫ</p>
                        <p className={style.icon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className={style.icon_svg} viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                            </svg>
                        </p>
                    </div>
                </div>
            </section>
}



export default Header