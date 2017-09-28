import React, { Component } from 'react';
import Item from "./Item"
import MyAwesomeReactComponent from "./MyAwesomeReactComponent"
import TextField from '../../node_modules/material-ui/TextField';

const CONTACTS = [
  {
    id: 1,
    name: "Vitaliy",
    age: "19"
  },
  {
    id: 2,
    name: "Petya",
    age: "29"
  },
  {
    id: 3,
    name: "Vasya",
    age: "39"
  },
  {
    id: 4,
    name: "Gosha",
    age: "15"
  },
];
class Dashboard extends Component {
    constructor(props) {
      super(props);
      this.state = { displayedContacts: CONTACTS };
      this.filterList = this.filterList.bind(this);
    }
    filterList(event) {
      const searchQuery = event.target.value.toLowerCase();
      this.setState((prevState) => ({
        displayedContacts: CONTACTS.filter(function (el) {
          const searchValue = el.name.toLowerCase();
          return searchValue.indexOf(searchQuery) !== -1;
        })
      }));
    }
    render() {
      return (
        <div className="App">
           <MyAwesomeReactComponent />
           <TextField
      hintText="Hint Text"
      onChange={this.filterList}
    /><br />
          {/* <input type='text' onChange={this.filterList} /> */}
          <ul>{
            this.state.displayedContacts.map(
              (el) => {
                return <Item key={el.id}
                  name={el.name}
                  age={el.age} />
              }
            )
          }
          </ul>
        </div>
      );
    }
  
 }
 export default Dashboard;