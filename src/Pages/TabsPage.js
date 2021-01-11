import { Paper, Tab, Tabs } from '@material-ui/core';
import React, { Component } from 'react';
import GithubIcon from '@material-ui/icons/GitHub';
import PeopleIcon from '@material-ui/icons/People';
import ListRepos from '../Components/ListRepos';

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
        console.log('Component Did Mount !');
        this.handleTabs(0, 1);
    }

    handleTabs = (e, value) => {
        if (value === 1 || this.state.tabValue === 1) {
            // console.log('at mount');
            this.handleRepos(this.state.username).then((data) => this.setState({ listRepos: data }));
        } else if (value === 2 || this.state.tabValue === 1) {
            this.handleFollowers(this.state.username).then((data) => this.setState({ listFollowers: data }))
            this.handleFollowed(this.state.username).then((data) => this.setState({ listFollowed: data }))
        }
        this.setState({ tabValue: value });
    }

    render() {
        return (
            <Paper>
                <Tabs value={this.state.tabValue} centered onChange={this.handleTabs}>
                    <Tab value={1} label="Repos" icon={<GithubIcon />} />
                    <Tab value={2} label="Follows" icon={<PeopleIcon />} />
                </Tabs>
                <Paper>
                    {
                        this.state.tabValue === 1 ?
                            <ListRepos listRepos={this.state.listRepos ? this.state.listRepos : null} />
                            :
                            JSON.stringify(this.state.listFollowed) + JSON.stringify(this.state.listFollowers)
                    }
                </Paper>
            </Paper>
        );
    }
}

export default TabsPage;