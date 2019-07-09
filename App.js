import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      dataSource: null,
    }
  }

  getData = () => {
    return fetch('http://api.aladhan.com/v1/hijriCalendarByCity')
      .then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  componentDidMount() {
    this.getData();
  }

  render(){
  return (
    <View style={styles.container}>
      <Text>O=pen up App.js to start working on your  app!</Text>
    </View> 
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
