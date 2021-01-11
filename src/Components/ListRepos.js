// @flow
import { Container, Grid } from '@material-ui/core';
import * as React from 'react';
import RepoCard from './RepoCard';

export default function ListRepos({ listRepos }) {
    return (
        <Container >
            <Grid container alignItems="flex-start" justify="center" zeroMinWidth>
                {
                    listRepos !== null ?
                        listRepos.length !== 0 ?
                            listRepos.map((item, index) => { return <RepoCard repo={item} /> })
                            :
                            null
                        :
                        null
                }
            </Grid>
        </Container>
    );
};