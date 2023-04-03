import styled from "styled-components"

export const Container = styled.section`
    min-height: 100vh;
    text-align: center;
    padding-top: 4rem;
    background-color: ${function (props) { return props.theme.colors.bodyColor }};

   
`

export const Heading = styled.div`
        
            color: #FFFFFF;
            width: 100%;

            

            h1{
                width: 40rem;
                margin: 0 auto;
                font-size: 28px;
                color: #F0F2F5;

                span{
                    color: ${function (props) { return props.theme.colors.ctaColor }};
                }
            }

            p{
                font-size: 16px;
                color: #BCC3D1;
                width: 32rem;
                padding: 0 2rem;
                margin: 1rem auto;
            }
`

export const Benefits = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10rem;
    padding: 0 10rem;



    div{
        flex: 1 1 200px;
        width: 4rem;

        h2{
            width: 12rem;
            color: #FFFFFF;
            margin: 0 auto;
        }

        p{
            text-align: center;
            width: 16rem;
            color: #BCC3D1;
            margin: 0 auto;

        }
    }


`