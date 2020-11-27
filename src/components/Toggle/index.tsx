import React from 'react';
import { Container, ToogleLabel, ToogleSelector } from './styles';

export const Toggle: React.FC = () => (
    <Container>
        <ToogleLabel>Light</ToogleLabel>
        <ToogleSelector onChange={ () => {} } uncheckedIcon={ false } checkedIcon={ false } checked={ false }/>
        <ToogleLabel>Dark</ToogleLabel>
    </Container>
)