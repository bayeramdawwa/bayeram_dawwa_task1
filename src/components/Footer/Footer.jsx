import React from 'react'
import './FooterStyle.css';
import Logo from '../Logo/Logo';
import logoImg from "./../../assist/img/logo.svg"
import LinkData from './LinkData';
import SocialMedia from '../SocialMedia/SocialMedia';
function Footer() {
    return (
        <div className='Footer'>
            <Logo logoImg={logoImg} logoTitle="Starter" />
            <ul className="Footer-menu" >
                {
                    LinkData.map((data) => {
                        return (
                            <li className='Footer-li' key={data.id}><a href={data.link} className='Fli_a'>{data.title}</a></li>
                        )
                    })
                }
            </ul>
            <SocialMedia />
            <p className="copyRight">
            @ Copyright 2023  Starter. Powered By BAYERAM
            </p>
        </div>
    )
}

export default Footer