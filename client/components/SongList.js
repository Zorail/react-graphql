import React,{ Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component{

    renderSongs(){
      return this.props.data.songs.map(song => {
        return (
            <li key={song.id} className="collection-item">
              {song.title}
            </li>
        );
      });
    }

    render(){
      // console.log(this.props);
      if(this.props.data.loading){
          return <div>Loading...</div>
      }

      return(
        <ul className="collection">
          {this.renderSongs()}
        </ul>
      );
    }
}

//query doesn't get executed here
const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

//graphql(query) returns a function which is immediately invoked by SongList
export default graphql(query)(SongList);
