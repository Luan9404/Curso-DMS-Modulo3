import React, { createContext, useReducer } from 'react';

const initialState = {
  books: []
}

export const BooksContext = createContext();

export const BooksContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return(
    <BooksContext.Provider value={{state, dispatch}}>
      { children }
    </BooksContext.Provider>
  )
}

export const reducer = (state, action) => {
  switch(action.type){
    case 'SEARCH_BOOKS':
      return { ...state, books: action.payload }
    case 'INSERT_BOOK':
      return {...state, books:[ ...state.books, action.payload ]}
    case 'DELETE_BOOk':
      return { ...state, books: books.filter(book => book.title != action.payload)}
    case 'UPDATE_BOOK':
      let book = state.books.find(book => book.title == action.payload.title)
      let updatedBook = {
        ...book,
        author: action.payload.author,
        title: action.payload.title,
        url: action.payload.url
      } 
      return {...state, books: books.map(books => {
        if(book.title = action.payload.title){
          book = updatedBook
        }
        return book
      })} 
    default:
      return initialState
  }
}