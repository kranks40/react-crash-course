import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

export default function GoalItem (props)  {
    return (
        <TouchableWithoutFeedback onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}>
            <Text>{props.title}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
      },
})
