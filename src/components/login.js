import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

class Login extends Component {
    // state = {
    //     username: '',
    // };
    
    render() {
        const {
            onClickLogin, onChangeText, username
        } = this.props;
        return (
            <View style={styles.loginContainer}>
                <TextInput
                    style={styles.input}
                    value={username}
                    // onChangeText={(text) => this.setState({username: text})}
                    onChangeText={onChangeText}
                    placeholder={'Enter User Nickname'}
                    maxLength={12}
                    multiline={false}
                />
            
                <TouchableHighlight
                    style={styles.button}
                    underlayColor={'#328FE6'}
                    onPress={onClickLogin}
                >
                    <Text style={styles.label}>LOGIN</Text>
                </TouchableHighlight>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 250,
        color: '#555555',
        padding: 10,
        height: 50,
        borderColor: '#32C5E6',
        borderWidth: 1,
        borderRadius: 4,
        alignSelf: 'center',
        backgroundColor: '#ffffff'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#328FE6',
        padding: 10,
        height: 50,
        marginTop: 10,
        backgroundColor: '#32c5e6'
    },
    label: {
        width: 230,
        flex: 1,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        color: '#ffffff'
    }
});

export default Login;