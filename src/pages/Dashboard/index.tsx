import React from 'react';
import { ContentHeader } from '../../components/ContentHeader';
import { SelectInput } from '../../components/SelectInput';
import { Container } from './styles';

export const Dashboard: React.FC = () => {
    const options = [
        { value: "Gustavo", label: "Gustavo"},
        { value: "Gustavo", label: "Gustavo"},
        { value: "Gustavo", label: "Gustavo"},
        { value: "Gustavo", label: "Gustavo"},
    ]

    return (
        <div>
            <Container>
                <ContentHeader title="Dashboard" lineColor="#f7931b">
                    <SelectInput options={ options }/>
                </ContentHeader>
            </Container>
        </div>
    )
}