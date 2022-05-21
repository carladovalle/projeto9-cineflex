export default function Footer () {
    return (
        <div className="barraInferior">
            <div className="moldura2">
                <div className="movie2">
                    <img src={movie.posterURL} className="movie2"/>
                </div>
            </div>
            <h5>{movie.title} {movie.weekday}</h5>
        </div>
    )
}