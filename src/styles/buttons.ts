import styled, { css } from 'styled-components';

interface iStyledButtonProps{
    buttonSize: 'lg' | 'md'
}

export const StyledButton = styled.button<iStyledButtonProps>`
    background: #FB8E0B;
    border-radius: 10px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: .6rem;
    color: ${({theme}) => theme.colors.neutral};
    font-family: "DM Sans", sans-serif;
    font-size: 16px;
    ${({buttonSize}) => {
        switch(buttonSize){
            case 'lg':
                return css`
                padding: 0 2.5rem;
                width: 220px;
                height: 56px;
                font-weight: 500;
                align-items: right;
                &:hover{
                    background: #FD6003;
                }
                `
            case 'md':
                return css`
                font-weight: 500;
                padding: 0 1rem;
                align-items: right;
                width: 167px;
                height: 50px;
                &:hover{
                    background: #FD6003;
                }
                `
        }
    }}
`