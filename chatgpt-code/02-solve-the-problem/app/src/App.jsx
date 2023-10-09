import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClick = async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts");
      const newList = await result.json();
      setList(newList);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Hello welcome to App</h1>
      </div>
      <div className="label">
        <h2>Show All List</h2>
        <button onClick={handleClick} disabled={loading}>
          {loading ? "Loading..." : "Show"}
        </button>
      </div>
      {error && <div className="error">{error}</div>}
      <div className="result">
        {list.map((item) => (
          <div key={item.id}>
            <p>
              {item.id} = {item.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
