import React,{ChangeEvent, FormEvent, useContext, useState} from 'react'
import { BookContext } from '../context/BookContext'
import IBook from '../context/IBook';

export const NewBook = () => {
    const initialBook = {
        id:"",
        author:"",
        title:""
    }
    const [book, setBook] = useState<IBook>(initialBook);
    const{addBook} = useContext(BookContext);
    const onSubmitHandler = (e:FormEvent) =>{
        e.preventDefault();
        addBook!(book);
        setBook(initialBook);
        
    }
    //Spread the existing object and update appropriate property
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
        setBook({...book,[e.currentTarget.name]:e.currentTarget.value});
    }
    return (
        <div>
            <form className="" onSubmit={onSubmitHandler}>
                <input type="text" name="title" placeholder="Enter Title" required value={book?.title} onChange={onChangeHandler}/>
                <input type="text" name="author" placeholder="Enter Author" required value={book?.author} onChange={onChangeHandler}/>
                <input type="submit" value="Add Book"/>
            </form>

        </div>
    )
}
