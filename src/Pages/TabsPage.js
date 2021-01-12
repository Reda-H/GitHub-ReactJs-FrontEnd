import { Container, Tab, Tabs } from '@material-ui/core';
import React, { Component } from 'react';
import GithubIcon from '@material-ui/icons/GitHub';
import PeopleIcon from '@material-ui/icons/People';
import ListRepos from '../Components/ListRepos';
import ListFollows from '../Components/ListFollows';

class TabsPage extends Component {
    constructor(props) {
        super(props);
        this.handleFollowed = this.props.handleFollowed;
        this.handleFollowers = this.props.handleFollowers;
        this.handleRepos = this.props.handleRepos;
        this.handleTabs = this.handleTabs.bind(this);
        this.state = {
            username: this.props.username,
            tabValue: 1,
            listRepos: null,
            listFollowers: null,
            listFollowed: null,
        }
    }

    componentDidMount() {
        this.handleTabs(0, 1);
    }

    handleTabs = (e, value) => {
        if (value === 1) {
            this.handleRepos(this.state.username).then((data) => this.setState({ listRepos: data }));
        } else if (value === 2) {
            this.handleFollowers(this.state.username).then((data) => this.setState({ listFollowers: data }))
            this.handleFollowed(this.state.username).then((data) => this.setState({ listFollowed: data }))
        }
        this.setState({ tabValue: value });
    }

    render() {
        return (
            <Container>
                <Tabs value={this.state.tabValue} centered onChange={this.handleTabs}>
                    <Tab value={1} label="Repos" icon={<GithubIcon />} />
                    <Tab value={2} label="Follows" icon={<PeopleIcon />} />
                </Tabs>
                <Container>
                    {
                        this.state.tabValue === 1 ?
                            <ListRepos listRepos={this.state.listRepos ? this.state.listRepos : null} />
                            :
                            <ListFollows listFollowers={this.state.listFollowers ? this.state.listFollowers : null} listFollowed={this.state.listFollowed ? this.state.listFollowed : null} />
                            // JSON.stringify(this.state.listFollowed) + JSON.stringify(this.state.listFollowers)
                    }
                </Container>
            </Container>
        );
    }
}

export default TabsPage;