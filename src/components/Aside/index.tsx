import React from 'react';
import { Container, Header, LogoImg, Title, MenuContainer, MenuItemLink } from './styles';
import logoImg from "../../assets/logo.svg"

export const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogoImg src={ logoImg } alt="Logo Minha Carteira" />
                <Title></Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="#">
                    Dashboard
                </MenuItemLink>
            </MenuContainer>
        </Container>
    )
}