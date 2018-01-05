import React,{ Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongList extends Component{

    renderSongs(){
      return this.props.data.songs.map(song => {
        return (
            <li key={song.id}>
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
        <div>
          {this.renderSongs()}
        </div>
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
