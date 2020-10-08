import React, {createContext, useState, useEffect} from 'react'
import IBook from './IBook';
import {v1 as uuid} from 'uuid';
interface IContextDefault{
    books:IBook[];
    addBook: (book:IBook) => void;
    removeBook: (id: string) => void;
}
//Defined a partial context to avoid supplying default value
export const BookContext = createContext<Partial<IContextDefault>>({});
//React.FC type supports children by default
const BookContextProvider: React.FC = ({children}) =>{
    const [books, setBooks] = useState<IBook[]>(() =>{
        const localdata = localStorage.getItem('MyBooks');

        return localdata ? JSON.parse(localdata): [];
        // {title:"The way of the warriors",author:"Tomcat tumpkins", id:"1"},
        // {title:"The day of reckoning", author:"Lisa Ray", id:"2"}

    });
    useEffect(() => {
        localStorage.setItem('MyBooks', JSON.stringify(books));
    }, [books])
    const addBook = (book:IBook)=>{
        book.id = uuid();
        setBooks([...books, book]);
    }
    const removeBook = (id:string) =>{
        setBooks(books.filter(book=>book.id !== id));
    }
    
    return (
        <BookContext.Provider value={{ addBook, books, removeBook}}>
            {children}
        </BookContext.Provider>
    );
}
export {BookContextProvider};