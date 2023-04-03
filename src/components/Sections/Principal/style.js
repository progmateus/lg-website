import styled from "styled-components";

export const Container = styled.section`
        display: flex;
        min-height: 90vh;
        justify-content: space-between;
        padding: 0 4rem;


        div{

             :first-child{

                div{
                    display:flex;
                    margin: 0 auto;
                    align-items: center;
                    justify-content: center;
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
                }

                p{
                    color: #444444;
                    width: 30rem;
                    margin-top: 1rem;
                    font-size: 18px;
                }
            }

        }



`