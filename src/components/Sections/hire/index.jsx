import { Header } from "@/components/Header";
import { Container } from "./style";
import Image from "next/image";



export function HireSection() {
    return (
        <Container>
            <div>
                <h1>
                    Contrate hoje mesmo e tire sua ideia do papel
                </h1>
                <p>
                    Conte com a LG Enterprise como sua parceira e não perca essa oportunidade
                </p>
                <div role="button">
                    ENTRAR EM CONTATO
                </div>
            </div>
            <div>
                <Image
                    src="/undraw_agreement.svg"
                    alt="Imagem de duas pessoas fechando um contrato"
                    width={503}
                    height={459}
                />
            </div>
        </Container>
    )
}