import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/login';
import Chat from './src/components/chat';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      flag: false,
      username: 'test'
    };
    this._onClickLogin = this._onClickLogin.bind(this);
    this._onChangeText = this._onChangeText.bind(this);
  }

 
  _onClickLogin = () => {
    const {username} = this.state;
    this.setState( (prev) => {
      const flag = username && !prev.flag;
      return {
        flag  
      };
    });
  }

  _onChangeText = (username) => {
    this.setState({ username });
  }
 
  render() {
    const {
      flag, username
    } = this.state;
    return (
      <View style={styles.container}>
        {flag ? <Chat /> : <Login onClickLogin = {this._onClickLogin} onChangeText={this._onChangeText}/>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',

    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#6E5BAA'
  }

});

export default App;