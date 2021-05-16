import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div className="pa2">
            <input 
            type="searchbox" 
            placeholder="Search Robots"
            className="ba pa3 b--green bg-lightest-blue"
            onChange = {searchChange}
            />
        </div>

    );
}

export default SearchBox;