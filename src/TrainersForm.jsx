import React from "react"

class TrainersForm extends React.Component {

    state = {
        newTrainer : ""
    }

    /**
     * onChange event need to be handle to take input everytime the input field get typed in
     */
    handleChnage =  event => {
        const currentElementValue = event.currentTarget.value;
        this.setState({newTrainer : currentElementValue});
    }

    handleSubmit = event => {
        event.preventDefault();

        const id = new Date().getTime;
        const name = this.state.newTrainer;

        this.props.onAddTrainer({id,name});
        this.setState({newTrainer : " "});
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.newTrainer} onChange={this.handleChnage} type="text" placeholder="Enter new Trainer name"/> {" "}
                    <button>Add Trainer</button>
                </form>
            </>
        )
    }
}

export default TrainersForm