import React from 'react';
import RaisedButton from '../../node_modules/material-ui/RaisedButton';
import AppBar from '../../node_modules/material-ui/AppBar';

const MyAwesomeReactComponent = () => (
    // <RaisedButton label="Default" onClick={hello} />
    <AppBar
    title="Title"
    iconClassNameRight="muidocs-icon-navigation-expand-more">
    <h1>hello</h1>  
    </AppBar>
);
function hello (){
 alert('Hello');
}
export default MyAwesomeReactComponent;