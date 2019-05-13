import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native';

class Chat extends Component {
    render() {
        // const {username} = this.props;
        return (
            <View style={styles.chatContainer}>
                <View style={styles.headerContainer} >
                    <Text style={styles.label}>That Chat</Text>
                </View>
                <View style={styles.bodyContainer} />
                    {/* <Text>Body</Text> */}
                {/* </View> */}
                <View style={styles.footerContainer} />
                    {/* <Text>Footer</Text> */}
                {/* </View> */}
            </View>
        );
    }
}




const styles = StyleSheet.create({
    chatContainer: {
        flex: 1,
        justifyContent: 'center',
        // color: '#fff',
        // flexDirection: 'column',
        backgroundColor: 'black',
    },
    headerContainer: {
        width:'100%',
        height:'9%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff9a9a',
    },
    bodyContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#d6ca1a',
    },
    footerContainer: {
        width:'100%',
        height:'14%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1ad657',
    },
    label: {
        alignSelf: 'center',
    }

});


export default Chat;