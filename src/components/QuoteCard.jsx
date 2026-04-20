function QuoteCard({ quote, author, loading, getQuote, handleLike, liked }) {
  const isLiked = liked.some((q) => q.quote === quote)

  return (
    <div className="card">
      {loading ? ( <p>Loading...</p>) : (
        <>
          <p className="quote">{quote}</p>
          <p className="author">— {author}</p>
        </>
      )}

      <div className="buttons">
        <button onClick={getQuote} disabled={loading}>
          New Quote
        </button>

        <button onClick={handleLike}>
          {isLiked ? "Liked 👍" : "Like 👍"}
        </button>
      </div>
    </div>
  )
}

export default QuoteCard;