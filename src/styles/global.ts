import { createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    button{
        cursor: pointer;
        background: transparent;
        border: none;
    }
    ul, ol{
        list-style: none;
        margin: 0;
        padding: 0;
    }
    li{
        list-style: 0;
    }
`

export const ColorsTheme= {
    colors: {
        header: '#1B1C20',
        body: '#383A47',
        text3: '#797B89',
        text4: '#C6C8D3',
        neutral: '#FFFFFF',
        background1: '#474958',
        background2: '#E8E9ED',
        background3: '#F8F8FA',
        primary: '#FB8E0B',
        primary2: '#FD6003',
    }
}