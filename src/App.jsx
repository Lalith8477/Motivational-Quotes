import { useEffect, useState } from "react";
import QuoteCard from "./components/QuoteCard";
import LikedQuotes from "./components/LikedQuotes";
import "./App.css";

function App() {
  const [author, setAuthor] = useState("")
  const [quote, setQuote] = useState("")
  const [loading, setLoading] = useState(false)
  const [liked, setLiked] = useState([])

  const getQuote = async ()=> {
    setLoading(true);
    const res = await fetch("https://dummyjson.com/quotes/random")
    const data = await res.json();

    setQuote(data.quote)
    setAuthor(data.author)
    setLoading(false);
  };

  useEffect(()=> {
    getQuote();
    const data = JSON.parse(localStorage.getItem("likedQuotes"))
    if (data) setLiked(data);
  }, []);

  const handleLike = ()=> {
    const isThere = liked.find((q) => q.quote === quote)

    let updated;

    if (isThere) {
      updated = liked.filter((q) => q.quote !== quote)
    } else {
      updated = [...liked, { quote, author }]
    }

    setLiked(updated);
    localStorage.setItem("likedQuotes", JSON.stringify(updated))
  }

  return (
    <div className="app">
      <h1>Motivational Quotes</h1>

      <QuoteCard
        quote={quote}
        author={author}
        loading={loading}
        getQuote={getQuote}
        handleLike={handleLike}
        liked={liked}
      />

      <div className="counter">
        👍 Total Likes: {liked.length}
      </div>

      <LikedQuotes liked={liked} />

    </div>
  )
}

export default App;