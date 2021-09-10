// import logo from './logo.svg';
import React from "react";
import './App.css';
import Trainer from './Trainer'
import TrainersForm from './TrainersForm'

class App extends React.Component {
  title = "LIST OF TRAINERS";
 
  //list of current clients
  state = {
    trainers : [
      {id : 1, name : 'Jacques'},
      {id : 2, name : 'Moise'}
    ]
  }

  /**
   * method to delete a trainer from the list when the X button having its 'id' get clicked
   */
  handleDeleteTrainer = (id) => {
    // make a copy of trainers list using the spread operator
    const trainers = [...this.state.trainers];
    
    //finding index to be compared to the id passed in parameter to the function
    const index = trainers.findIndex((trainer) => trainer.id === id);

    //splicing the trainer list by removing the index found
    trainers.splice(index,1);

    //mutating the state to apply modification when rendering the page by using the setState() and destructuring method
    this.setState({ trainers });
  }
  
  /**
   * method to add a new Trainer to the list
   */
  handleAddTrainer = (trainer) => {
    const trainers = [...this.state.trainers];
    trainers.push(trainer);

    this.setState({ trainers });  // this.setState({ trainers : trainers })
  }

  render() {
    return(
      <div className="trainersList">
        <h1>{this.title}</h1>
        {/* displaying the list of all clients */}
        <ol>
          {
          this.state.trainers.map((trainer) => 
            <Trainer trainersData={trainer} onDeleteTrainer={this.handleDeleteTrainer}/>
          )}
        </ol>

        {/* embeding the 'TrainersForm' Component to get the form to insert new Trainer */}
        <TrainersForm onAddTrainer={this.handleAddTrainer}/>
      </div>
    )
  }
}

export default App;
