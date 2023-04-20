import styled from "styled-components";


export const Container = styled.header`
    display: flex;
    background-color: ${function (props) { return props.theme.colors.headerColor }};
    height: 3rem;
    align-items: center;
    padding-right: 4rem;
    padding-left: 3rem;

            img{
                width: 32px;
            }

            nav{
                width: 12rem;
                margin-left: auto;

                ul{
                    display: flex;
                    list-style-type: none;
                    justify-content: space-between;
                    color: #FFFFFF;
                }

                a{
                    transition: 0.3s;

                    :hover{
                        opacity: 0.7;
                    }
                };
            }

            #close-button{
                display: none;
            }

            #open-button{
                display: none;
            }



            @media screen and (max-width: 1200px) {
                justify-content: space-around;
                padding: 0 1rem;

                body{
                    overflow-x: hidden;
                }

                nav{
                    margin-left: auto;

                    svg{
                        margin-left: auto;
                        font-size:24px;
                        font-weight: 700;
                    }
                }

                ul{
                    position: absolute;
                    z-index: 1;
                    top: 3rem;
                    right: 0;
                    width: 70vw;
                    height: 100vh;
                    justify-content: flex-start !important;
                    background-color: #3F5EAF;
                    flex-direction: column;
                    align-items: center;
                    transform: translateX(100%);
                    transition: transform 0.3s ease-in;

                    li{
                        font-size: 16px;
                        margin-top: 2rem;
                        margin-left: 0;
                    }
                }

                #close-button{
                    display: block;
                    color: #FFFFFF;
                    transition: 0.3s;
                }

                #open-button{
                    display: block;
                    color: #FFFFFF;
                    transition: 0.3s;

                }

                .active{
                    transform: translateX(0);
                    box-shadow: -30vw 0 rgb(60, 60, 62, 90%);
                }
            }
        


`;