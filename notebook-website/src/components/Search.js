import React from 'react';
import { MdSearch} from 'react-icons/md';

const Search = ( {handlerSearchNote }) => {
    return(
        <div className="search">
            <MdSearch className='search-icons' size='1.3em' />
            <input onChange={(event) => handlerSearchNote(event.target.value)} type='text' placeholder='type to search...' />
        </div>
    )
}

export default Search