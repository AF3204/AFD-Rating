import Rate from "./component/Rate";

function App() {
  return (
    <div>
      <div>
        The Minimalist Entreprenuer 
        <Rate rating='3.8'/> 
        add review
      </div>
      <div>  
        <ul>
          <li>
            <Rate rating='4'/>  book was full of fluff
          </li>
          <li>
            <Rate rating='3'/> book was full of fluff
          </li>
          <li>
            <Rate rating='4'/> book was full of fluff
          </li>
        </ul>
      </div>
      <div>
        What's your rating 
        <Rate rating='0'/>
        Review
        Submit
      </div>

    </div>
  );
}

export default App;
