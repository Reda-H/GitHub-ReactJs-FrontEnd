// @flow
import { Container, Grid } from '@material-ui/core';
import * as React from 'react';
import RepoCard from './RepoCard';

import jsLogo from '../Assets/Images/js_icon.svg';
import swiftLogo from '../Assets/Images/swift_icon.svg';
import pythonLogo from '../Assets/Images/python_icon.svg';
import elixirLogo from '../Assets/Images/elixir_icon.svg';
import cssLogo from '../Assets/Images/css_icon.svg';
import dockerLogo from '../Assets/Images/docker_icon.svg';
import jupyterLogo from '../Assets/Images/jupyter_notebook_icon.svg';
import htmlLogo from '../Assets/Images/html_icon.svg';
import cLogo from '../Assets/Images/c_icon.svg';
import typescriptLogo from '../Assets/Images/typescript_icon.svg';
import bashIcon from '../Assets/Images/bash_icon.svg';



const languages = [
    {
        name: 'JavaScript',
        logo: jsLogo
    }, {
        name: 'TypeScript',
        logo: typescriptLogo,
    }, {
        name: 'C',
        logo: cLogo,
    }, {
        name: 'Jupyter Notebook',
        logo: jupyterLogo
    }, {
        name: 'HTML',
        logo: htmlLogo
    }, {
        name: 'CSS',
        logo: cssLogo
    }, {
        name: 'Dockerfile',
        logo: dockerLogo
    }, {
        name: 'Elixir',
        logo: elixirLogo
    }, {
        name: 'Swift',
        logo: swiftLogo
    }, {
        name: 'Python',
        logo: pythonLogo
    }]

const placeholderPicture = {
    name: 'No Language Known',
    logo: bashIcon
}


const pickLanguageImage = (name) => {
    for (const element in languages) {
        if (name === languages[element].name) {
            return languages[element].logo;
        }
    }
    return placeholderPicture.logo;
}

export default function ListRepos({ listRepos }) {
    return (
        <Container >
            <Grid container alignItems="flex-start" justify="center">
                {
                    listRepos !== null ?
                        listRepos.length !== 0 ?
                            listRepos.map((item, index) => { return <RepoCard repo={item} pickLanguageImage={pickLanguageImage} zeroMinWidth/> })
                            :
                            null
                        :
                        null
                }
            </Grid>
        </Container>
    );
};