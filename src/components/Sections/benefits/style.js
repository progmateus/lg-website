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


        @media screen and (max-width: 1200px) {

            padding: 0 0.5rem;

            h1{
                max-width: 100%;
                font-size: 28px;
                /* background-color: #ff0000; */
            }

            p{
                max-width: 100%;
                padding: 0 1rem;
                font-size: 14px;

            }

        }
`

export const Benefits = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 10rem;
    padding: 0 10rem;
    justify-content: space-evenly;


    div{
        flex: 1 1 20rem;

        margin: 10px;


        h2{
            width: 12rem;
            color: #FFFFFF;
            margin: 0 auto;
        }

        p{
            text-align: center;
            width: 20rem;
            color: #BCC3D1;
            margin: 0.5rem auto;

        }
    }

    @media screen and (max-width: 1200px) {
        margin-top: 4rem;
        padding: 0;




        div{
            justify-content: space-between;
            letter-spacing: 0.2px;
            margin: 15px;

            h2{
                font-size: 20px;
                width: 12rem;
                color: #FFFFFF;
                margin: 0 auto;
            }

            p{
                font-size: 14px;
                text-align: center;
                width: 20rem;
                color: #BCC3D1;
                margin: 0.5rem auto;

            }
        }

        #undraw_savings_money{
            width:103px;
            height:83px;
        }

        #undraw_time_management{
            width:103px;
            height:83px;
        }

        #undraw_security{
            width:104px;
            height:68px;
        }

    }
    
`