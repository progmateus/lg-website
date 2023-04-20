import styled from "styled-components";

export const Container = styled.section`
        min-height: 100vh;
        background-color: #0C207A;
        padding: 0 4rem;

        >div{

                :first-child{
                        padding-top: 2rem;

                        h2, p{
                                text-align: center;
                                color: #FFFFFF;
                        }

                        h2{
                                :nth-child(1){
                                        font-size: 18px;
                                        margin-bottom: 2rem;
                                        opacity: 0.8;
                                        letter-spacing: 1px;
                                }

                        }

                        span{
                                color: #FD7E14;
                        }
                }

                :nth-child(2){
                        display: flex;
                        flex-wrap: wrap;
                        margin-top: 2rem;
                }
                
        }

        @media screen and (max-width: 975px) {
                padding: 2rem;
        }

`

export const ModalService = styled.div`

        flex: 1 1 14rem;
        height: 13rem;
        background-color: #0D2168;
        color: #F2F2F2;
        padding: 1rem;
        border-radius: 20px;
        margin: 1rem 4rem;

        > div{
                display: flex;
                font-size: 24px;
                align-items: center;
        }

        h2{
                font-size: 16px;
                max-width: 100%;
                margin-left: 10px;
                letter-spacing: 1px;
                font-weight: 700;
        }

        p{
                font-size: 14px;
                max-width: 100%;
                color: #DDEEFF;
                font-weight: 300;
                opacity: 0.9;
                margin-top: 1.5rem;
        }


        @media screen and (max-width: 1200) {
                max-width: 100%;
                height: 14rem;
                margin: 1rem 0;

                h2{
                        font-size: 16px;
                }

                p{
                        font-size: 14px;

                }
        }
       

`