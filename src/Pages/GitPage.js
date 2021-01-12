import { Paper } from '@material-ui/core';
import React, { Component } from 'react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Wrapper from '../Components/Wrapper';
import AvatarComponent from '../Components/AvatarComponent';
import ListButtons from '../Components/ListButtons';
import TabsPage from './TabsPage';



class GitPage extends Component {
    constructor(props) {
        super(props);
        this.handleFollowers = this.props.handleFollowers;
        this.handleFollowed = this.props.handleFollowed;
        this.handleRepos = this.props.handleRepos;
        this.state = {
            user: this.props.user,
        }
    }
    render() {
        return (
            <div className={`git-page`} style={{width: '100vw', padding: '8px'}}>
                <div>
                    <Header username={this.state.user.name} />
                    <Hero />
                    <Paper elevation={4} style={{border: '1px solid', position: 'relative', bottom: '12px'}}>
                        <Wrapper>
                            <Paper elevation={4} style={{ position: 'relative', bottom: '5vh', border: '1px solid' }}>
                                <AvatarComponent link={this.state.user.avatar_url} username={this.state.user.name} login={this.state.user.login} />
                                <ListButtons twitterUrl={this.state.user.twitter_username} websiteUrl={this.state.user.blog} />
                                <TabsPage 
                                    username={this.state.user.login} 
                                    handleFollowers={this.handleFollowers} 
                                    handleFollowed={this.handleFollowed}
                                    handleRepos={this.handleRepos}
                                    />
                                {/* {JSON.stringify(this.state.user)} */}
                            </Paper>
                        </Wrapper>
                    </Paper>
                </div>
            </div>
        );
    }
}

export default GitPage;