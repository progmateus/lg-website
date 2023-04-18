import { Header } from "@/components/Header";
import { Benefits, Container, Heading, ModalService } from "./style";
import Image from "next/image";
import { RiLightbulbLine } from "react-icons/ri";
import { MdOutlineBuild } from "react-icons/md";
import { BsVectorPen } from "react-icons/bs";
import { IoBuildOutline } from "react-icons/io5";


import { TbBrush } from "react-icons/tb";
import { SlSpeedometer } from "react-icons/sl";
import { SlScreenSmartphone } from "react-icons/sl";





export function OurServicesSection() {
    return (
        <Container>

            <div>
                <h2> Nossos Serviços </h2>

                <h2> Oferecemos a <span> melhor solução</span> para <br></br> <span> a sua necessidade </span></h2>
            </div>

            <div>
                <ModalService>

                    <div>
                        <RiLightbulbLine />
                        <h2> Inception </h2>
                    </div>

                    <p>
                        Começamos entendendo o mercado, o seu negócio, produto, seu cliente e suas expectativas para
                        o projeto.  <br></br> <br></br> <br></br>Isso irá ajudar na agilidade e entrega do projeto.
                    </p>
                </ModalService>

                <ModalService>
                    <div>
                        <BsVectorPen />
                        <h2> Prototipação </h2>
                    </div>

                    <p>
                        É o processo de encontrar soluções criativas, bonitas e  eficientes na hora de desenhar as telas do seu site ou aplicativo.<br></br>
                        <br></br>O protótipo nos permite testar as idéias antes de partir para a próxima fase.
                    </p>
                </ModalService>

                <ModalService>
                    <div>
                        <IoBuildOutline />
                        <h2> Desenvolvimento </h2>
                    </div>

                    <p>
                        Focamos no desenvolvimento ágil e nas entregas em pequenas partes.<br></br>Isso nos
                        dá uma visão da evolução do projeto e podemos fazer ajustes pelo caminho.
                    </p>
                </ModalService>

                <ModalService>
                    <div>
                        <TbBrush />
                        <h2> Identidade Visual </h2>
                    </div>

                    <p>
                        Definimos junto a você a hierarquia das informações e o conteúdo dos textos para
                        formarem um conjunto harmônico e que torne a experiência de navegação agradável e intuitiva.
                    </p>
                </ModalService>

                <ModalService>

                    <div>
                        <SlSpeedometer />
                        <h2> Até 10x Mais Rápido </h2>
                    </div>

                    <p>
                        Nossas metodologias e a tecnologia usada permitem entregar seu app em muito menos
                        tempo que o desenvolvimento tradicional.
                    </p>
                </ModalService>

                <ModalService>
                    <div>
                        <SlScreenSmartphone />
                        <h2> Responsividade </h2>
                    </div>

                    <p>
                        Quer ter presença online no mundo mobile? Fazemos o seu site se comportar como um
                        aplicativo, adaptável a cada tipo de dispositivo: computadores, celulares e tablets.                    </p>
                </ModalService>
            </div>

        </Container>
    )
}