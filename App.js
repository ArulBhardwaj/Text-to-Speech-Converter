import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Header} from 'react-native-elements';
import db from './localdb';
import PhonicSoundButton from './components/PhonicSoundButton';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      text:'',
      chunks:[],
      phonicSounds:[],
    };
  }
  render(){
    return(
      <View style={styles.container}>
      <Header
      background={'#9c8120'}
      centerComponent={{
        text:'Text to Speech',
        style:{color:'#fff',fontSize:20},
      }}
      />
      <Image
      style={styles.imageIcon}
      source={{
        uri:
        '',
      }}
      />
      <TextInput 
      style={styles.inputBox}
      onChangeText={text=>{
        this.setState({text:text});
      }}
      value={this.state.text}
      />
      <TouchableOpacity
      style={styles.goButton}
      onPress={()=>{
        this.setState({chunks:db[this.state.text].chunks});
        this.setState({phonicSounds:db[this.state.text].chunks});
      }}>
      <Text style={styles.buttonText}>Click Here</Text>
      </TouchableOpacity>
      <View>
      {this.state.chunks.map((item,index)=>{
        return(
          <PhonicSoundButton
          wordChunk={this.state.chunks[index]}
          soundChunk={this.state.phonicSounds[index]}
          />
        );
      })}
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#g8g8g8',
  },
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageIcon: {
    width: 150,
    height: 150,
    marginLeft: 95,
  }
});
