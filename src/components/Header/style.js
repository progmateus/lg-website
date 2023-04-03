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

            div{
                width: 12rem;
                margin-left: auto;
                ul{
                    display: flex;
                    justify-content: space-between;
                    list-style-type: none;
                    color: #FFFFFF;
                }
            }
        


`;