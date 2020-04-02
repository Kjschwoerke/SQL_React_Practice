import React, {Component} from 'react';
import './App.css';


class App extends Component {

  state = {
    shows: [],
    show: {
      id: 'id',
      title: 'title',
      about: 'about'
    }
  }

  componentDidMount() {
    this.getShows();
  }

  getShows = _ => {
    fetch('http://localhost:4000/shows')
    .then(response => response.json())
    .then(response => this.setState({ shows: response.data}))
    .catch(err => console.error(err))
  }

  addShow = _ => {
    const { show } = this.state
    console.log(show.title)
    fetch(`http://localhost:4000/shows/add?id=${show.id}&title=${show.title}&about=${show.about}`)
    .then(this.getShows)
    .catch(err => console.error(err))
  }

  deleteShow = (id) => {
    fetch(`http://localhost:4000/shows/delete?id=${id}`)
    .then(this.getShows)
    .catch(err => console.error(err))
  }

render(){
  const { shows, show } = this.state
  return (
    <div className="App">
      {shows.map(show => {
        return(
        <div> 
        <ul> 
          <li key={show.id}>{ show.id }</li>
          <li>{ show.title }</li> 
          <li>{ show.about } </li>
        </ul>
        <button onClick={() => this.deleteShow(show.id)}> Delete Show </button>
      </div>
        )
      })}
      <div>
        <input 
        value = {show.id} 
        onChange = {e => this.setState({ show: { ...show, id: e.target.value }})}
        />
        <input 
        value = {show.title} 
        onChange = {e => this.setState({ show: { ...show, title: e.target.value }})}
        />
        <input 
        value = {show.about} 
        onChange = {e => this.setState({ show: { ...show, about: e.target.value }})}
        />
        <button onClick={this.addShow}> Add New Show </button>
      </div>
    </div>
  );
 }
}

export default App;
