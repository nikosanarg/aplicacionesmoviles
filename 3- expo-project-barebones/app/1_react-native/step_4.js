import React from 'react';
import {
  View, // https://facebook.github.io/react-native/docs/view.html
  Text, // https://facebook.github.io/react-native/docs/text.html
  StyleSheet, // https://facebook.github.io/react-native/docs/stylesheet.html
  Image, // https://facebook.github.io/react-native/docs/image.html
  Button, // https://facebook.github.io/react-native/docs/button.html
  TouchableOpacity, // https://facebook.github.io/react-native/docs/touchableopacity.html
} from 'react-native';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      title: 'Welcome!',
    };

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {
    console.log('Pressed');

    this.setState({
      title: 'Button was pressed!',
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.section}>
          <Image
            style={styles.logo}
            source={require('../../assets/icon.png')}
          />

          <Text style={styles.textLarge}>
            {this.state.title}
          </Text>

          <Text style={styles.textSmall}>
            (Open up main.js to start working)
          </Text>
        </View>

        <View style={styles.section}>
          <Button
            onPress={this.onButtonPress.bind(this)}
            title="Press Me"
            color={'#16a085'}
            accessibilityLabel="See an informative alert"
          />

          <TouchableOpacity
            style={styles.customButton}
            onPress={this.onButtonPress.bind(this)}
          >
            <Text style={styles.customButtonText}>
              Our button
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
  section: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#eee',
    padding: 10,
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 20,
  },
  textLarge: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  textSmall: {
    color: '#34495e',
    fontStyle: 'italic',
    paddingBottom: 5,
  },
  customButton: {
    backgroundColor: '#16a085',
    borderRadius: 3,
    margin: 5,
    padding: 5,
  },
  customButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default App;
