import React ,{Component} from 'react';
//import ReactDOM from 'react-dom';
import './App.css';
import Playlist from '../Playlist/Playlist.js';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Spotify from '../../util/Spotify';



let playlistName = 'Ozlem Party';
let playlistTracks = ['Desert Rose','Sting','Brand New Day','01'];



class App extends Component {
  constructor (props){
    super(props);
    this.state = {};
    this.state.searchResults = [{
        name : 'Track 1',
        artist :'Artist 1',
        album : 'Album 1',
        id: '1'
      },
      {
        name : 'Track 2',
        artist :'Artist 2',
        album : 'Album 2',
        id: '2'
      },
      {
        name : 'Track 3',
        artist :'Artist 3',
        album : 'Album 3',
        id: '3'
      }];


    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlayList = this.savePlayList.bind(this);
    this.search = this.search.bind(this);
    }


  search(term){
        Spotify.userSearch(term)
            .then(searchResults => this.setState({
                searchResults: searchResults
            }));
  }
  //completely lost in search method

  addTrack(track){
   let trackExists = this.props.playlistTracks.some( _track => track.id == _track.id);
   if (!trackExists) {
   let updatedPlaylist = this.props.playlistTracks.concat(track);
   this.setState({ playlistTracks: updatedPlaylist});
   }
  }
  removeTrack(track){
    let updatedPlaylist = this.state.playlistTracks.filter(_track => { return track.id !== _track.id });
    this.setState({ playlistTracks: updatedPlaylist });
  }
  updatePlaylistName(name){
    this.setState({ playlistName: name });
    //let updatePlaylistName=this.setState({playlistName: updatePlaylistName});
    //not sure about that//
  }
  savePlayList(){
    let trackURIs = this.state.playlistTracks.map(track => { return track.uri });
        Spotify.savePlaylist(this.state.playlistName, trackURIs);
        this.setState({
          searchResults: []
        });
        this.updatePlaylistName('My playlist');
  }

  render() {
  return (
    //<div className="App">
      //<header className="App-header">

        //<h1 className="App-title">Welcome to React</h1>
      //</header>
      //<p className="App-intro">
      //  To get started, edit <code>src/App.js</code> and save to reload.
      //</p>
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
      <SearchBar onSearch={this.state.search}/>
      <div className="App-playlist">
        <SearchResults searchResults={this.state.searchResults} onAdd={this.state.addTrack}/>
        //<Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.state.removeTrack} onNameChange={this.state.updatePlaylistName}/>
      </div>
    </div>
    </div>
    //</div>
  );
}
}


Spotify.getAccessToken();

export default App;

//ReactDOM.render(<App/>, document.getElementById('App'));
