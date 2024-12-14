
export default function Book({ book, readed, deleted }) {
    return (
        <div className={book.readed ? 'readed book': 'book'}>
            <input type="checkbox" onChange={() => {readed(book)}} value={book.readed}></input>
            {book.readed ? (<p>Прочитано</p>) : (<></>)}
            <h4 className='title'>{book.title}</h4>
            <p className='author'>{book.author}</p>
            <p className="genre">Жанр: {book.genre}</p>
            <p className="publush">Издало: {book.publisher}</p>
            <button className="delBtn" onClick={() => {deleted(book)}}>Удалить</button>
        </div>
    )
}