import React from 'react';
import {
  View, // https://facebook.github.io/react-native/docs/view.html
  Text, // https://facebook.github.io/react-native/docs/text.html
  StyleSheet, // https://facebook.github.io/react-native/docs/stylesheet.html
  Image, // https://facebook.github.io/react-native/docs/image.html
  Button, // https://facebook.github.io/react-native/docs/button.html
  TextInput, // https://facebook.github.io/react-native/docs/textinput.html
  Dimensions, // https://facebook.github.io/react-native/docs/dimensions.html
} from 'react-native';

import CustomButton from '../../components/CustomButton';

const fullWidth = Dimensions.get('window').width;

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
        <View style={[styles.section]}>
          <Image
            style={styles.logo}
            source={require('../../assets/icon.png')}
          />

          <Text style={styles.textLarge}>
            {this.state.title}
          </Text>
        </View>

        <View style={styles.section}>
          <TextInput
            style={styles.textInput}
            onChangeText={title => this.setState({ title })}
            value={this.state.title}
            autoCorrect={false}
            placeholder={'This is a placeholder!'}
            underlineColorAndroid={'transparent'}
            keyboardAppearance={'dark'}
            returnKeyType={'send'}
          />
        </View>

        <View style={styles.section}>
          <Button
            onPress={this.onButtonPress.bind(this)}
            title="Press Me"
            color={'#16a085'}
            accessibilityLabel="See an informative alert"
          />

          <CustomButton
            onPress={this.onButtonPress}
            title="Our custom button"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
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
  textInput: {
    height: 30,
    color: '#333',
    fontSize: 14,
    fontWeight: '500',
    width: fullWidth - 20,
    borderColor: '#ddd',
    borderWidth: 1,
    padding: 5,
  },
});

export default App;
