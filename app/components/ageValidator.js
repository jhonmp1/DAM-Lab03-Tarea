import React, { Component } from 'react';
import {View, Text, TextInput} from 'react-native';

class AgeValidator extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          textValue: '',
        };
    }

    changeTextInput = text => {
        if (text>= 18) {
            this.setState({textValue: 'Es mayor de edad'});
        } else {
            this.setState({textValue: 'Es menor de edad'});
        }
    };
    
    render() {
        return(
            <View>
                <TextInput 
                style={{marginTop:10, height:40, borderColor: 'gray', borderWidth: 1}}
                keyboardType = 'numeric'
                onChangeText={text => this.changeTextInput(text)}
                />
                <Text>{this.state.textValue}</Text>
            </View>
        )
    }
    
}

export default AgeValidator;