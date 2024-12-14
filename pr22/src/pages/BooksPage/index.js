import React, { useEffect, useState } from 'react'
import BookList from '../../features/Books/BookList'
import BooksDispl from '../../features/Books/BookDispl'


export default function BookPage() {
    const [books, setBooks] = useState(() => {
        const savedBooks = localStorage.getItem('books')
        return savedBooks ? JSON.parse(savedBooks) : []
    })

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])
    function addBook(book) {
        setBooks((prevBooks) => [...prevBooks, book])
        console.log('Книги обновлены', books)
    }
    function readBook(book) {
        setBooks((prevBooks) => {
            const updBooks = prevBooks.map((b) => {
                if(b.title === book.title) {
                    console.log('Меняем состояние')
                    return {...b, readed: !b.readed}
                }
                return b;
            })
            console.log(updBooks);
            return updBooks
        })
    }

    function deleteBook (book) {
        if(window.confirm('Вы уверены, что хотите удалить эту книгу?')) {
            setBooks((prevBooks) => {
                const nBooks = prevBooks.filter((b) => !(b.title === book.title && b.author === book.author))
                return nBooks
            })
        }
    }

    function sortBook() {
        setBooks((prevBooks) => {
            const sorted = [...prevBooks].sort((a,b) => a.title.localeCompare(b.title))
            console.log(sorted)
            return sorted
        })
    }
    
    return (
        <>
            <h1>Книги</h1>
            <BookList books={books} updBooks={addBook}></BookList>
            <button onClick={sortBook} className='sort'>Сортировать</button>
            <h1>Ваши книги</h1>
            <BooksDispl books={books} readed={readBook} deleted={deleteBook}></BooksDispl>
        </>
    )
}