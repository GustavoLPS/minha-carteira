import React from 'react';
import { ContentHeader } from '../../components/ContentHeader';
import { SelectInput } from '../../components/SelectInput';
import { Container } from './styles';

export const List: React.FC = () => {
    const options = [
        { value: "Gustavo", label: "Gustavo"},
        { value: "Gustavo", label: "Gustavo"},
        { value: "Gustavo", label: "Gustavo"},
        { value: "Gustavo", label: "Gustavo"},
    ]

    return (
        <Container>
            <ContentHeader title="Saídas" lineColor="#e44c4e">
                <SelectInput options={ options }/>
            </ContentHeader>
        </Container>
    )
}