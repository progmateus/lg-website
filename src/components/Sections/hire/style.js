import styled from "styled-components";

export const Container = styled.section`
        display: flex;
        min-height: 100vh;
        justify-content: space-between;
        align-items: center;
        padding-left: 4rem;
        padding-right: 3rem;



        div{

             :first-child{
                /// paragraph
                width: 32rem;


                    h1{
                        max-width: 100%;
                        font-size: 46px;
                        letter-spacing: 0.5px;
                        color: ${function (props) { return props.theme.colors.bodyColor }};
                    }

                    p{
                        width: 30rem;
                        margin-top: 1rem;
                        font-size: 18px;
                        color: ${function (props) { return props.theme.colors.bodyColor }};
                        font-weight: 300;
                    }

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
                
            }

            :nth-child(2){
                /// image
                /* background-color: ${function (props) { return props.theme.colors.ctaColor }}; */
                width: 31.438rem;
                height: 28.688rem;

                img{
                    max-width: 100%;
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