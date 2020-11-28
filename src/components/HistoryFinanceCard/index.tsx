import React from 'react'
import { Container, Tag } from './styles'

interface IHistoryFinanceCardInputProps {
    tagColor: string;
    title: string;
    subtitle: string;
    amount: string;
}

export const HistoryFinanceCard: React.FC<IHistoryFinanceCardInputProps> = ({ tagColor, title, subtitle, amount }) => {
    return (
        <Container>
            <Tag tagColor={ tagColor } />
            <div>
                <span>{ title }</span>
                <small>{ subtitle }</small>
            </div>
            <h3>{ amount }</h3>
        </Container>
    )
}