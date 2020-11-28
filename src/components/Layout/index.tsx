import React from 'react';
import { Aside } from '../Aside';
import { Content } from '../Content';
import { MainHeader } from '../MainHeader';
import { Grid } from './styles';

export const Layout: React.FC = ({ children }) => {
    return (
        <Grid>
            <MainHeader />
            <Aside />
            <Content>
                { children }
            </Content>
        </Grid>
    )
}