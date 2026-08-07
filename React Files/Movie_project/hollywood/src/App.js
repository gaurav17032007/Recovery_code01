import './App.css';
import Header from './Movie/Header';
import movies from './Movie/Movie.json';
function App() {
  let login=  true;

  return (
    <div className="App">
    {
      login = true ? <Header/> : <h2 style={{color: 'orange'}}>Kha bhai ?</h2>
    }
      <header className="App-header">
        <h1>Movie Review</h1>
      </header>
        
        <div className='App'>{
          movies.map((element,index)=>{         
            return(
            <Header
            key={index}
              title={element.Title}
              year={element.Year}
              img={element.Poster}
              />
            )
          })
        }
    </div>
    </div>
  );

}
export default App;