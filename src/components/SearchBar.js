import React from 'react';

class SearchBar extends React.Component {
   
    state = {term: ''};
    onInputChange = (e) => {
        this.setState({term: e.target.value});
    }
    onFormSumit = (e) => {
        e.preventDefault();
        //ToDo: Make sure we call callback 
        //from parent component.
    }
    render() {
        return (
            <div className="search-bar ui segment">
               <form action="" className="ui form" onSubmit= {this.onFormSumit}>
               <div className="field">
                    <label htmlFor="">Video Search</label>
                    <input 
                    type="text" value={this.state.term}
                    onChange={this.onInputChange}
                    />
               </div>
               </form>
            </div>
        );
    }
}

export default SearchBar;