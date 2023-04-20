import styled from "styled-components";


export const Container = styled.footer`
    display: flex;
    background-color: ${function (props) { return props.theme.colors.footerColor }};
    min-height: 18rem;
    padding: 2rem;
    flex-wrap: wrap;

    > div{
        flex: 1 1 8rem;
        /* background-color: ${function (props) { return props.theme.colors.ctaColor }}; */
        margin: 0 1rem;
        color: rgb(242, 245, 249, 70%);


        :first-child{
            //div with logo
            flex: 1 1 16rem;
            height: 8rem;

            img{
             width: 100%;
             height: 100%;
            }
        }


            :nth-child(3){
                /// social

                h2{
                    text-align: center;
                }

                > div{
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 1rem;
                
                span{
                    display: flex;
                    width: 3rem;
                    height: 3rem;
                    background-color: #FFFFFF;
                    border-radius: 50px;
                    justify-content: center;
                    margin: 0 0.5rem;

                    a{
                        display: flex;
                        align-items: center;
                    }

                    svg{
                        font-size: 28px;
                        color: black;
                    }
                }
            }
        }

        h2{
            font-size: 18px;
            font-weight: 300;
        }

        ul{
            margin-top: 1rem;
            list-style-type: none;
            color: rgb(242, 245, 249, 100%);
            font-weight: 300;
            font-size: 14px;

            li{
                & + li {
                    margin-top: 0.5rem;
                }
            }
        }

       
    }


    @media screen and (max-width: 975px) {
        padding: 0;

        > div{
            margin: 1rem 1rem;

            h2{
                font-size: 14px;
                font-weight: 300;
            }

            ul{
                font-size: 12px;
            }

            :nth-child(3){
                /// social
                > div{
                
                span{
                    width: 2rem;
                    height: 2rem;
                    background-color: #FFFFFF;

                    svg{
                        font-size: 18px;
                    }
                }
            }
        }
        }
    }


`;