import styled from "styled-components";

export const Container = styled.section`
        display: flex;
        min-height: 100vh;
        justify-content: space-between;
        padding: 0 4rem;


        div{

             :first-child{

                div{
                    //button
                    display:flex;
                    margin: 0 auto;
                    align-items: center;
                    justify-content: center;

                    user-select: none;
                    width: 14rem;
                    height: 3rem;
                    margin-top: 2rem;
                    font-size: 16px;
                    border-radius: 50px;
                    background-color: ${function (props) { return props.theme.colors.ctaColor }};
                    font-weight: bold; 
                    color: #FFFFFF;


                     &:hover{
                        cursor: pointer;
                        background-color: #FD933A;
                        transition: 0.5s;        
                     }
                }

                h1{
                    width: 32rem;
                    font-size: 46px;
                    margin-top: 8rem;
                    letter-spacing: 0.5px;
                }

                p{
                    color: #444444;
                    width: 30rem;
                    margin-top: 1rem;
                    font-size: 18px;
                }
            }

        }

    @media screen and (max-width: 1200px) {
        flex-direction: column;
        justify-content: flex-start;
        padding: 0;



        > div{


            :nth-child(1){
                //paragrafo
                order: 1;
                margin: 0 auto;
                margin-top: 4rem;
                height: 12rem;
                /* background-color: #FF7F50; */
                width: 100%;
                padding: 0 1.5rem;



                h1{
                    max-width: 100%;
                    font-size: 28px;
                    margin-top: 0;
                }

                p{
                    max-width: 100%;
                    font-size: 16px;
                }

                > div{
                    //button
                    position: relative;
                    top: 22rem;
                    width: 20rem;
                    height: 4rem;
                    font-size: 18px;
                }
            }

            :nth-child(2){
                //image
                order: 2;
                margin: 0 auto;
                width: 17rem;
                height: 17rem;



                img{
                    max-width: 100%;
                    max-height: 100%;
                }

            }
            
        }
    }

`