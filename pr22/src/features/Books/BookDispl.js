import Book from '../../shared/ui/book'


export default function BooksDispl( { books, readed, deleted } ) {
    return (
        <div className='books'>
            {books.map((book, ind) => (
                <Book key={ind} book={book} readed={readed} deleted={deleted}></Book>
            ))}
        </div>
    )
}