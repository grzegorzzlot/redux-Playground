import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {add, del} from './actions/index'

class App extends Component {
  componentDidMount() {
    console.log(this.props)
  }
handlePlus = ()=>{
    this.props.add()
}
handleMinus = ()=>{
    this.props.del()
}
  render() {
    return (
        <div className="App">
            <button onClick={this.handlePlus}>Klik +</button>
            <span>{this.props.data}</span>
            <button onClick={this.handleMinus}>Klik -</button>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        data: state.dummyData.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: ()=>{ dispatch(add()) },
        del: ()=>{ dispatch(del()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
