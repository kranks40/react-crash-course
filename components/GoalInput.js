import React, { useState } from 'react'
import { Button, Modal, StyleSheet, TextInput, View } from 'react-native'

export default function GoalInput(props) {
    const [ enteredGoal, setEnteredGoal ] = useState('');
  
     
    const enterGoals = (enteredText) => {
      setEnteredGoal(enteredText)
    };

    const clearenteredGoals = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('')

    };
    

    return (
        <Modal visible={props.visible} animationType='fade'>
            <View style={styles.container}>
            <TextInput 
                style={styles.inputText} placeholder='Enter your Goals'
                onChangeText={enterGoals}
                value={enteredGoal}
                />
            <View style={styles.button}>
                <View style={styles.cancel__button}>
                    <Button title='Cancel' color='red' onPress={props.onCancel} />
                </View>
                <View style={styles.add__button}>
                    <Button onPress={clearenteredGoals} title='Add' />
                </View>               
                
            </View>

            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    inputText: {
        width: '100%',
        borderBottomColor: 'black',
        borderWidth: 2,
        padding: 10,
        marginVertical: 5,
      },
    
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
      },

      button: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: "space-around",
        marginVertical: 5,
      },

      add__button: {
          width: '30%',
          borderRadius: 10,
      },

      cancel__button: {
        width: '30%',
        borderRadius: 30,
      }

     
})
