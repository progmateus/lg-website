import Image from "next/image";
import { Container } from "./style";
import { SiGmail } from "react-icons/si";
import { RiFacebookCircleFill, RiInstagramLine } from "react-icons/ri";



export function Footer() {

    return (
        <Container >
            <div>
                <Image
                    src="/logo.svg"
                    alt="LG Logo"
                    width={35}
                    height={35}
                />
            </div>

            <div>
                <h2> INFORMAÇÕES DE CONTATO </h2>
                <ul>
                    <li> Telefone: (11) 4002-8922 </li>
                    <li> E-mail: lgltechnology@gmail.com </li>
                    <li> R. Praça Inácio Gomes, 137 - Rio de Janeiro -RJ </li>
                    <li> CEP: 21625-220 </li>
                    <li> CNPJ: 41.388.570/0001-88 </li>


                </ul>
            </div>

            <div>
                <h2> EXPLORE NOSSAS REDES </h2>

                <div>
                    <span> <a> <RiFacebookCircleFill /> </a> </span>
                    <span> <a> < RiInstagramLine /></a> </span>
                    <span> <a> < SiGmail /></a> </span>
                </div>
            </div>
        </Container>
    )

}