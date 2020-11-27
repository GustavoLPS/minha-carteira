import styled from 'styled-components'

export const Container = styled.div `
    grid-area: AS;
    background-color: ${ props => props.theme.colors.secondary };
    padding-left: 20px;
    border-right: 1px solid ${ props => props.theme.colors.gray };
`

export const Header = styled.div `
    display: flex;
    color: ${ props => props.theme.colors.white };
    background-color: ${ props => props.theme.colors.secondary };
`

export const LogoImg = styled.img `
    grid-area: AS;
    color: ${ props => props.theme.colors.white };
    background-color: ${ props => props.theme.colors.secondary };
`

export const Title = styled.img `
    grid-area: AS;
    color: ${ props => props.theme.colors.white };
    background-color: ${ props => props.theme.colors.secondary };
`

export const MenuContainer = styled.nav `
    grid-area: AS;
    color: ${ props => props.theme.colors.white };
    background-color: ${ props => props.theme.colors.secondary };
`

export const MenuItemLink = styled.a `
    grid-area: AS;
    color: ${ props => props.theme.colors.white };
    background-color: ${ props => props.theme.colors.secondary };
`