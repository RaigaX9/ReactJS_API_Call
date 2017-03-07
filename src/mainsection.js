import React, {Component} from 'react';
import * as restcalls from './restcall';
import {connect} from 'react-redux';

function connectstates(t) {
    return {
        repos: t.repo
    }
}

class Main extends Component {
    constructor() {
        super();
        this.state = {name: ''};
        this.performSearch = this.performSearch.bind(this);
        this.getRepoList = this.getRepoList.bind(this);
        this.changeStates = this.changeStates.bind(this);
    }
    changeStates(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    performSearch(e){
        e.preventDefault();
        this.props.getUser(this.state.name);
    }

    getRepoList() {
        var x = this.props.repos;
        if(x != "") {
            var repoList = this.props.repos.repos.map((repo, index) => {
                return (
                    <div key={index}>
                        <a href={repo.name/repo.issue}>
                            <span style={{fontWeight:"bold"}}>Name:</span> {repo.name} <span style={{fontWeight:"bold"}}>Description:</span> {repo.description}
                            <br/>
                            <span style={{fontWeight:"bold"}}>Star(s):</span> {repo.stargazers_count}
                        </a>
                        <br/>
                    </div>
                );
            });
            return repoList;
        }
    }

    render(){
        return (
            <div>
                <form className="row" style={{marginTop: "100px"}} onSubmit={this.performSearch}>
                    <div>
                        <input
                            value={this.state.name}
                            onChange={this.changeStates}
                            name="name"
                            type="text"
                            className='form-control'
                        />
                    </div>
                    <br/>
                    <div>
                        <br/>
                        <button type="submit" className="btn">Search</button>
                    </div>
                </form>
                {this.getRepoList()}
            </div>
        );
    }
}

export default connect(connectstates, restcalls)(Main);