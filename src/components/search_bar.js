/**
 * Created by fran on 9/7/17.
 */

import React, { Component } from 'react';

class SearchBar extends Component{

    
    constructor(props){
       super(props);

       this.state = { term : '' };
    }
    
    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={(event) => this.onInputChange(event.target.value) }/>
            </div>
        )
    }

    onInputChange(term){
        this.setState({ term: term});
        this.props.onSearchTermChange(term);
    }

}

//export as a global to import
export default SearchBar;