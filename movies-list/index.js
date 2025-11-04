import React, {useState} from 'react'
import ReactDOM from 'react-dom'

function App() {
  const [movies, setMovies] = useState([])
  const [movieInput, setMovieInput] = useState('')

  function handleAdd() {
    if (movieInput === '') return
    setMovies([...movies, {name: movieInput, rating: 0, comment: ''}])
    setMovieInput('')
  }

  function handleRating(index, rating) {
    const updatedMovies = [...movies]
    updatedMovies[index].rating = rating
    setMovies(updatedMovies)
  }

  function handleCommentChange(index, newComment) {
    const updatedMovies = [...movies]
    updatedMovies[index].comment = newComment
    setMovies(updatedMovies)
  }

  function handleSuggestion(title) {
    setMovies([...movies, {name: title, rating: 0, comment: ''}])
  }

  function handleDelete(index) {
    const updated = movies.filter((_, i) => i !== index)
    setMovies(updated)
  }

  return (
    <div className="movies-container">
      <h1>F-Movies</h1>

      <div className="add-task">
        <input
          type="text"
          value={movieInput}
          onChange={(e) => setMovieInput(e.target.value)}
          placeholder="Add Movie"
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className="suggested-movies">
        <h3>Or choose a suggested movie</h3>
        <section className="suggestions">
          <button onClick={() => handleSuggestion('Taken')}>Taken</button>
          <button onClick={() => handleSuggestion('The Mechanic')}>
            The Mechanic
          </button>
          <button onClick={() => handleSuggestion('Transporter')}>
            Transporter
          </button>
          <button onClick={() => handleSuggestion('John Wick')}>
            John Wick
          </button>
        </section>
      </div>

      <ul>
        {movies.map((movie, index) => (
          <li key={index}>
            <div>
              <strong>{movie.name}</strong>
              <button onClick={() => handleDelete(index)}>X</button>
              <div>
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} onClick={() => handleRating(index, star)}>
                    {movie.rating >= star ? '⭐' : '☆'}
                  </span>
                ))}
              </div>
            </div>

            <input
              type="text"
              placeholder="Add a comment..."
              value={movie.comment}
              onChange={(e) => handleCommentChange(index, e.target.value)}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
