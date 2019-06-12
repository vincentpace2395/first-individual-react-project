import React from 'react';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';

// App component
class App extends React.Component {
   state = {
       username: "vpace"
   };

   userNameChanged = event => {
       this.setState({
           username: event.target.value
       })
   };

   render() {
       return (
           <div className="App">
               <UserInput
                   changed={this.userNameChanged}
                   currentName={this.state.username}
               />
               <UserOutput username={this.state.username}/>
               <UserOutput username="default"/>
           </div>
       );
   }
}

export default App;
