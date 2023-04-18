import { Header } from "@/components/Header";
import { Container } from "./style";
import Image from "next/image";

export function PrincipalSection() {
    return (
        <div>
            <Header />

            <Container>
                <div>
                    <h1>
                        Transforme sua ideia
                        em uma grande solução digital
                    </h1>
                    <p>
                        Soluções para você tirar sua ideia do papel ou dar o próximo passo no seu negócio
                    </p>
                    <div role="button">
                        ENTRAR EM CONTATO
                    </div>
                </div>
                <div>
                    <Image
                        src="/Website-Creator-rafiki.svg"
                        alt="LG Logo"
                        width={500}
                        height={500}
                    />
                </div>
            </Container>
        </div>

    )
}