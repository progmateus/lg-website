import { Header } from "@/components/Header";
import { Benefits, Container, Heading } from "./style";
import Image from "next/image";

export function AboutSection() {
    return (
        <Container>

            <div id="Segment-rafiki_desktop">
                <Image
                    src="/Segment-rafiki.svg"
                    alt="LG Logo"
                    width={471}
                    height={471}
                />
            </div>

            <div>
                <h2> Sobre nós </h2>

                <div id="Segment-rafiki_mobile">
                    <Image
                        src="/Segment-rafiki.svg"
                        alt="LG Logo"
                        width={471}
                        height={471}
                    />
                </div>

                <p>
                    A LG Technology é uma empresa de desenvolvimento de software dedicada a ajudar seus clientes a criar seus próprios websites. Com uma equipe altamente qualificada e experiente em tecnologia, a empresa utiliza as mais recentes ferramentas e técnicas de desenvolvimento de software para criar sites personalizados que atendam às necessidades e objetivos de seus clientes. <br></br>

                    A LG Technology trabalha em estreita colaboração com seus clientes, ouvindo suas ideias e expectativas para criar sites que transmitam a essência de seus negócios. A empresa entende que cada negócio é único e, portanto, oferece soluções personalizadas que são adaptadas às necessidades de cada cliente. <br></br>

                    A LG Technology é uma empresa comprometida com a satisfação do cliente, oferecendo suporte contínuo e manutenção para garantir que o site esteja sempre atualizado e funcionando corretamente. A empresa é conhecida por seu atendimento excepcional e abordagem consultiva, trabalhando com os clientes em cada etapa do processo de desenvolvimento para garantir que o site atenda às suas expectativas. <br></br>

                    Em resumo, a LG Technology é uma empresa confiável e experiente em desenvolvimento de software, dedicada a ajudar seus clientes a criar seus próprios websites. Com sua abordagem personalizada e técnicas avançadas de desenvolvimento de software, a LG Technology pode ajudar seus clientes a expandir seus negócios e alcançar novos públicos através da presença online. <br></br>


                </p>
            </div>

        </Container>
    )
}