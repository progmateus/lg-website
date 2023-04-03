import Image from "next/image";
import { Container } from "./style";

export function Header() {
    return (
        <Container>
            <Image
                src="/logo.svg"
                alt="LG Logo"
                width={35}
                height={35}
            />
            <div>
                <ul>
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

            </div>
        </Container>
    )

}