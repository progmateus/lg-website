import styled from "styled-components";

export const Container = styled.section`
    min-height: 100vh;
    display: flex;
    flex: wrap;
    padding: 0 5rem;
    align-items: center;

    #Segment-rafiki_mobile{
        display: none;
    }

    #Segment-rafiki_desktop{
        margin-top: 2rem;
    }


    > div{
        flex: 1 1 20rem;

        h2{
            text-align: center;
            font-size: 48px;
            color: #0C207A;
            letter-spacing: 1px;

        }

        p{
            margin-top: 2rem;
            color: #121D4F;
        }

        img{
            max-width: 100%;
            max-height: 100%;
        }
    
        :nth-child(2){
            max-width: 45rem;
            padding: 0 2rem;

        }


    }

    @media screen and (max-width: 975px) {
        flex-direction: column;
        padding: 0 2rem;

        #Segment-rafiki_desktop{
            display: none;
        }

        #Segment-rafiki_mobile{
            display: block;
            margin: 2rem auto;
            border-radius: 50px;
            width: 17rem ;
            height: 17rem;
            background-color: #5F9EA0;
        }



        div{
            margin: 0 auto;

            :nth-child(2){
                // paragraph

                width: 100%;
                order: 1;
                width: 100%;
                padding: 0;

                h2{
                    font-size: 32px;
                    letter-spacing: 0.5px;
                    margin-top: 4rem;
                    color: #2B03FF;

                }

                p{
                    font-size: 14px;
                }
            }
        }

       

      
    }


`