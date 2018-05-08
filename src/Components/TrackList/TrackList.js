import React from 'react';
import './TrackList.css';
import Track from '../Track/Track.js';

/*
{this.props.tracks.map(track =>{
  return
    <Track track={track} key={track.id} onAdd={this.props.onAdd} onRemove={this.props.removeTrack} isRemoval={this.props.isRemoval}/>
  })}
*/
function show(props)
{
  console.log('====props: ' + JSON.stringify(props));
  let ret = [];
  console.log('props.tracks.length = ' + props.tracks.length);
  for(let track of props.tracks) {
    //console.log(track.name);
    ret.push(<Track track={track} key={track.id} onAdd={props.onAdd} onRemove={props.removeTrack} isRemoval={props.isRemoval}/>)
  }
  return ret;
}

class TrackList extends React.Component {
  render() {
    console.log('tracks: ' + JSON.stringify(this.props.tracks));
    return (
      <div className = "TrackList">
        {show(this.props)}
      </div>
    );
  }
}

export default TrackList;
