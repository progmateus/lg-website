import { Header } from "@/components/Header";
import { Benefits, Container, Heading } from "./style";
import Image from "next/image";

export function BenefitsSection() {
    return (
        <Container>
            <Heading>
                <h1>Faça sua empresa <span>crescer</span> ainda mais</h1>
                <p>Tenha uma vantagem competitiva com aplicações web que atendam todas as suas necessidades</p>
            </Heading>

            <Benefits>
                <div>
                    <Image
                        src="/undraw_savings_money.svg"
                        alt="LG Logo"
                        width={166}
                        height={134}
                    />


                    <h2>
                        Custo-benefício
                    </h2>
                    <p>
                        Soluções pensadas para o seu projeto, acompanhamento do
                        inicio ao pós lançamento do software
                    </p>
                </div>

                <div>
                    <Image
                        src="/undraw_time_management.svg"
                        alt="LG Logo"
                        width={166}
                        height={134}
                    />


                    <h2>
                        Agilidade
                    </h2>
                    <p>
                        Utilizamos metodologias ageis de desenvolvimento, acelerando
                        o processo de entrega do seu software
                    </p>
                </div>

                <div>
                    <Image
                        src="/undraw_security.svg"
                        alt="undraw_security.svg"
                        width={167}
                        height={119}
                    />


                    <h2>
                        Segurança
                    </h2>
                    <p> Mantemos seu software atualizado com as ultimas correções
                        de segurança e atualizações de software
                    </p>
                </div>
            </Benefits>
        </Container>
    )
}