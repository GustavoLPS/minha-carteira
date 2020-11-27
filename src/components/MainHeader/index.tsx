import React, { useMemo } from 'react';
import emojis from '../../utils/emojis';
import { Toggle } from '../Toggle';
import { 
    Container,
    Profile,
    Welcome,
    UserName
 } from './styles';

export const MainHeader: React.FC = () => {
    const emoji = useMemo(() => {
        const indice = Math.floor(Math.random() * emojis.length)
        console.log(emojis)
        return emojis[indice]
    }, [])
    return (
        <Container>
            <Toggle />
            <Profile>
                <Welcome>Olá, { emoji }</Welcome>
                <UserName>Gustavo Pinheiro</UserName>
            </Profile>
        </Container>
    )
}