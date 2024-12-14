import React, { useState, useEffect } from 'react'
import InputForm from './InputForm'

export default function BookList({ books, updBooks }) {
    const [book, setBook] = useState({})
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [genre, setGenre] = useState('')
    const [publisher, setPublisher] = useState('')

    function handleTitle(event) {
        setTitle(event.target.value)
    }
    function handleAuthor(event) {
        setAuthor(event.target.value)
    }
    function handleGenre(event) {
        setGenre(event.target.value)
    }
    function handlePublisher(event) {
        setPublisher(event.target.value)
    }

    useEffect(() => {
        if(book.title) {
            console.log(book)
            updBooks(book)
        }
    }, [book])

    function addBook() {
        if(title !== '' && author !== '' && publisher !== '' && genre !== '') {
            const nBook = { title: title, author: author, genre: genre, publisher: publisher, readed: false }
            setBook(nBook)
            setTitle('')
            setAuthor('')
            setGenre('')
            setPublisher('')
        } else {
            alert('Введите все данные')
        }
    }
    function handleKeyDown(event) {
        if(event.key === 'Enter') {
            addBook()
        }
    }

    return (
        <div className='newbooks'>
            <InputForm title={title} handleTitle={handleTitle}
            author={author} handleAuthor={handleAuthor}
            genre={genre} handleGenre={handleGenre}
            publisher={publisher} handlePublisher={handlePublisher}
            keyDown={handleKeyDown}
            ></InputForm>
            <button onClick={addBook}>Добавить книгу</button>
        </div>
        
    )
}