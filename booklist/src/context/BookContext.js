import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

// {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
// {title: 'the final empire', author: 'brandon sanderson', id: 2}

export const BookContext = createContext();


const BookContextProvider = (props) => {

    const [books, dispatch] = useReducer(bookReducer, [], ()=>{
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : []
    });

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books])

    return (
        <BookContext.Provider value={{books, dispatch}}>
            { props.children }
        </BookContext.Provider>
    )
}
 
export default BookContextProvider;