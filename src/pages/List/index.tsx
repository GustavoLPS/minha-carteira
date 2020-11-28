import React from 'react';
import { Content } from './styles';
import { ContentHeader } from '../../components/ContentHeader';
import { HistoryFinanceCard } from '../../components/HistoryFinanceCard';
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
            <Content>
                <HistoryFinanceCard 
                    tagColor ="#e44c4e"
                    title="Conta de Luz"
                    subtitle="27/07/2020"
                    amount="R$ 130,00"
                />
            </Content>
        </Container>
    )
}