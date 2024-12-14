
export default function InputForm({ title, handleTitle,
    author, handleAuthor,
    genre, handleGenre,
    publisher, handlePublisher,
    keyDown}) {

    return (
        <>
            <input value={title} onChange={handleTitle} onKeyDown={keyDown} placeholder="Введите название"></input>
            <input value={author} onChange={handleAuthor} onKeyDown={keyDown} placeholder="Введите автора"></input>
            <input value={genre} onChange={handleGenre} onKeyDown={keyDown} placeholder="Введите жанр (основной)"></input>
            <input value={publisher} onChange={handlePublisher} onKeyDown={keyDown} placeholder="Введите издательство"></input>
        </>
    )
}