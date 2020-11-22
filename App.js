import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [ courseGoals, setCourseGoals ] = useState([]);
  const [ isAddModal, setIsAddModal ] = useState(false);


  const addButton = (goalTitle) => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      {id: Math.random().toString(), value: goalTitle } 
    ]);
    
    setIsAddModal(false);
  };

  const removeGoal = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelModal = () => {
    setIsAddModal(false)
  }

   

  return (
    <View style={styles.css}>
      <Button title='Add new Goal' onPress={() => setIsAddModal(true)} />
     <GoalInput 
        visible={isAddModal} 
        onAddGoal={addButton}
        onCancel={cancelModal}
        />

      <FlatList 
      keyExtractor={(item, index) => item.id}
      data={courseGoals}
      renderItem={itemData => (
       <GoalItem id={itemData.item.id} onDelete={removeGoal} title={itemData.item.value}/>
      )}
      />
        
    </View>
  );
}

const styles = StyleSheet.create({
  css: {
    padding: 50,
  }, 
  
});
