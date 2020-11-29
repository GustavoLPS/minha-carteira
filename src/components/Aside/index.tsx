import React from 'react';
import { Container, Header, LogoImg, Title, MenuContainer, MenuItemLink } from './styles';
import logoImg from "../../assets/logo.svg"
import { MdDashboard, MdArrowUpward, MdExitToApp, MdArrowDownward } from 'react-icons/md'

export const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <LogoImg src={ logoImg } alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItemLink href="/dashboard">
                    <MdDashboard /> Dashboard
                </MenuItemLink>
                <MenuItemLink href="/list/entry-balance">
                    <MdArrowUpward /> Entradas
                </MenuItemLink>
                <MenuItemLink href="/list/exit-balance">
                    <MdArrowDownward /> Saídas
                </MenuItemLink>

                <MenuItemLink href="#">
                    <MdExitToApp /> Sair
                </MenuItemLink>
            </MenuContainer>
        </Container>
    )
}