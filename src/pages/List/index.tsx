import React, { useMemo, useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid'
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import HistoryFinanceCard from '../../components/HistoryFinanceCard';
import gains from '../../repositories/gains';
import expenses from '../../repositories/expenses';
import formatCurrency from '../../utils/formatCurrency';
import formatDate  from '../../utils/formatDate';
import listOfMonths from '../../utils/months'
import { Container, Filters, Content } from './styles';

interface IRouteParams {
    match: {
        params: {
            type: string
        }
    }
}

interface IData {
    id: string,
    description: string,
    amountFormatted: string,
    frequency: string,
    dateFormatted: string,
    tagColor: string
}

const List: React.FC<IRouteParams> = ({ match }) => {
    const [data, setData] = useState<IData[]>([])
    const [monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth() + 1))
    const [yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()))
    const [frequencyFilteredSelected, setSelectedFrequency] = useState(['recorrente', 'eventual'])
    const movimentType  = match.params.type

    const pageData = useMemo(() => {
        if (movimentType === 'entry-balance') {
            return {
                title: 'Entradas',
                lineColor: '#f7931b',
                listData: gains
            }
        } else {
            return {
                title: 'Saídas',
                lineColor: '#e44c4e',
                listData: expenses
            }
        }
    }, [movimentType])

    const months = useMemo(() => {
        return listOfMonths.map((month, index) => {
            return {
                value: index + 1,
                label: month
            }
        })
    }, [])

    const years = useMemo(() => {
        let uniqueYears: number[] = []
        const { listData } = pageData
        listData.forEach(item => {
            const date = new Date(item.date)
            const year = date.getFullYear()

            if (!uniqueYears.includes(year)) {
                uniqueYears.push(year)
            }
        })

        return uniqueYears.map(year => {
            return {
                value: year,
                label: year
            }
        })
    }, [pageData])

    const handleFrequencyClick = (frequency: string) => {
        const alreadySelected = frequencyFilteredSelected.findIndex(item => item === frequency)

        if (alreadySelected >= 0) {
            const filtered = frequencyFilteredSelected.filter(item => item !== frequency)
            setSelectedFrequency(filtered)
        } else {
            setSelectedFrequency((prev) => [...prev, frequency])
        }
    }

    useEffect(() => {
        const { listData } = pageData
        const filteredData = listData.filter(item => {
            const date = new Date(item.date)
            const month = String(date.getMonth() + 1)
            const year = String(date.getFullYear())

            return month === monthSelected && year === yearSelected && frequencyFilteredSelected.includes(item.frequency)
        })

        const formattedData = filteredData.map(item => {
            return {
                id: uuid(),
                description: item.description,
                amountFormatted: formatCurrency(Number(item.amount)), frequency: item.frequency,
                dateFormatted: formatDate(item.date),
                tagColor: item.frequency === 'recorrente' ? '#4e41f0' : '#e44c4e'
            }
        })

        setData(formattedData)
    }, [pageData, monthSelected, yearSelected, data.length, frequencyFilteredSelected])

    return (
        <Container>
            <ContentHeader title={ pageData.title } lineColor={ pageData.lineColor }>
                <SelectInput options={ months } onChange={e => setMonthSelected(e.target.value)} defaultValue={ monthSelected }/>
                <SelectInput options={ years } onChange={e => setYearSelected(e.target.value)} defaultValue={ yearSelected }/>
            </ContentHeader>
            <Filters>
                <button
                    type="button"
                    className={`tag-filter tag-filter-recurrent ${frequencyFilteredSelected.includes('recorrente') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('recorrente')}>Recorrentes</button>
                <button
                    type="button"
                    className={`tag-filter tag-filter-eventual ${frequencyFilteredSelected.includes('eventual') && 'tag-actived'}`}
                    onClick={() => handleFrequencyClick('eventual')}>Eventuais</button>
            </Filters>
            <Content>
                {
                    data.map(item => (
                        <HistoryFinanceCard 
                            key={item.id}
                            tagColor ={ item.tagColor }
                            title={ item.description }
                            subtitle={ item.dateFormatted }
                            amount={ item.amountFormatted }
                        />
                    ))
                }
            </Content>
        </Container>
    )
}

export default List