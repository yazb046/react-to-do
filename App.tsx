import React from 'react';
import { useState } from 'react';
import {
  View, StyleSheet, Button, FlatList,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
interface CourseGoal {
  text: string;
  id: string;
}

const App = () => {

  const [courseGoals, setCourseGoals] = useState<CourseGoal[]>([]);
  const [modalIsVisible, setModelIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModelIsVisible(true);
  }

  function endAddGoalHandler() {
    setModelIsVisible(false);
  }

  function addGoalHandler(enteredGoalText: string) {

    // setCourseGoals([...courseGoals, enteredGoalText]); not good way to update
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() } as CourseGoal
    ]);
    setModelIsVisible(false);
  }
  function deleteGoalHandler(id: string) {
    setCourseGoals(currentCourseGoals => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  return (
    <>
      <StatusBar style='dark'/>
      <View style={styles.appContainer}>
        <Button title='Add New Goal' color='green' onPress={startAddGoalHandler} />
        <GoalInput onAddGoal={addGoalHandler} onEndGoal={endAddGoalHandler} visible={modalIsVisible} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
  },
  goalsContainer: {
    flex: 5
  }
})
export default App;