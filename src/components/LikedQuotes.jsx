function LikedQuotes({liked}) {
  if (liked.length === 0) return null;

  return (
    <div className="list">
      <h2>Liked Quotes</h2>

      {liked.map((q, i) => (
        <div key={i} className="item">
          <p>{q.quote}</p>
          <span>— {q.author}</span>
        </div>
      ))}
    </div>
  );
}

export default LikedQuotes;