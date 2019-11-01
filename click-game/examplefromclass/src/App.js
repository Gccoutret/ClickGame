import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";



class App extends React.Component {

  deleteFriend = id => {
    //this const could be "const anything" but later in "this.setState({friends})" 
    //you would need "({friends: anything})"
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends })
  }

  state= {
    friends
  }

  render(){

  return (
    <Wrapper>
       <h1 className="title">Friends List</h1>
      {
        this.state.friends.map(friend => {
          return (
            <FriendCard 
              deleteFriend={this.deleteFriend}
              id={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
      />
          )
        })
      }
      
    </Wrapper>
  );
}
}

export default App;

// function List(props) {
//   return (
//     <ul className="list-group">
//       {
//         props.groceries.map(item => {
//           return (
//             <li>{item.name}</li>
//           )
//         })
//       }
//     </ul>
//   );
// }
