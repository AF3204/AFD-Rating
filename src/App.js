import Rate from "./component/Rate"
// import Cardlist from "./component/Cardlist";
import './App.css';

function App() {
  return (
    
    // Container
    <div className="container">
      {/* Using Cards */}
      <div className="card">
        <h1>The Minimalist Entreprenuer</h1> 
        <Rate rating={3.8} review={null}/> 
        <button style={{padding:'0 5px 0 5px'}}>Add Review</button>
      </div>
      {/* Separate card for Reviews */}
      <div className="card">  
        <h2>Reviews</h2>
        <ul>
          <li>
            <Rate rating={3.8} review={'Text 1'}/>  
          </li>
          <li>
            <Rate rating={4} review={'Text 2'}/> 
          </li>
          <li>
            <Rate rating={3} review={'Text 3'}/> 
          </li>
        </ul>
      </div>
      <div>
        What's your rating 
        <Rate rating={0}/>
        Review
        Submit
      </div>
    </div>
  );
}

export default App;
