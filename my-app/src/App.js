
import './App.css';
import profpic from './img/image-jeremy.png'

function App() {
  return (
    <div className="App">
      <div className="container">

        <div className="profile">
          <div className="upper-pro">
              <div className="up-one">
              <img className ="pro-img" src={profpic} alt="profile pic"/>
            </div>
            <div className="up-two">
              <p>Report For</p>
              <h1>Jeremy Robson</h1>
            </div>
          

          </div>

          <div className="lower-pro">
          <a>Daily</a> <a>Weekly</a> <a>Monthly</a>
          </div>

         
           
        </div>
        <div className="timelog">

          <div className='cards orange'>
          
            <div className="c-lower">

              <div className="card-header">
                <p>Work</p>
                <p>...</p>
              </div>
              <div className="card-content">
                <h1>32hrs</h1>
                <p>Last Week 36hrs</p>
              </div>
              
              </div>

          </div>
          <div className='cards blue'>
          
            <div className="c-lower">
            <div className="card-header">
                <p>Play</p>
                <p>...</p>
              </div>
              <div className="card-content">
                <h1>10hrs</h1>
                <p>Last Week 36hrs</p>
              </div>
              
              </div>

          </div>
          <div className='cards pink'>
          
            <div className="c-lower">

              <div className="card-header">
                <p>study</p>
                <p>...</p>
              </div>
              <div className="card-content">
                <h1>4hrs</h1>
                
                <p>Last Week 7hrs</p>
              </div>
              
              </div>

          </div>
          <div className='cards green'>
          
            <div className="c-lower">

            <div className="card-header">
                <p>Exercise</p>
                <p>...</p>
              </div>
              <div className="card-content">
                <h1>4hrs</h1>
                <p>Last Week 5hrs</p>
              </div>
              
              </div>

          </div>
          <div className='cards voilet'>
          
            <div className="c-lower">

            <div className="card-header">
                <p>Social</p>
                <p>...</p>
              </div>
              <div className="card-content">
                <h1>5hrs</h1>
                <p>Last Week 10hrs</p>
              </div>
              
              </div>

          </div>
          <div className='cards yellow'>
          
            <div className="c-lower">

            <div className="card-header">
                <p>Self Care</p>
                <p>...</p>
              </div>
              <div className="card-content">
                <h1>2hrs</h1>
                <p>Last Week 2hrs</p>
              </div>
              
              </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;
