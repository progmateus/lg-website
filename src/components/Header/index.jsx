import Image from "next/image";
import { Container } from "./style";
import { MdClose } from "react-icons/md";
import { TfiMenu } from "react-icons/Tfi";
import { RxHamburgerMenu } from "react-icons/rx";

import { useEffect, useState } from "react";





export function Header() {


    const [isNavbarOpen, setIsNavbarOpen] = useState(false);

    // useEffect(() => {
    //     console.log(isNavbarOpen)
    // }, [isNavbarOpen])

    const handleClickNavbarButton = (value) => {
        setIsNavbarOpen(value)
        const nav = document.getElementById("nav-list")
        nav.classList.toggle("active")
    }

    return (
        <Container isNavbarOpen={isNavbarOpen}>
            <Image
                src="/logo.svg"
                alt="LG Logo"
                width={35}
                height={35}
            />
            <nav>

                {isNavbarOpen ?
                    < MdClose id="close-button" onClick={() => { handleClickNavbarButton(false) }} />
                    :
                    <RxHamburgerMenu id="open-button" onClick={() => { handleClickNavbarButton(true) }} />
                }


                <ul id="nav-list">
                    <li>
                        <a href="#contato">Contato</a>
                    </li>
                    <li>
                        <a href="#sobre">Sobre</a>
                    </li>
                    <li>
                        <a href="#sites">Sites</a>
                    </li>
                </ul>
            </nav>
        </Container>
    )

}