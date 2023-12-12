import React from 'react';
import { useState } from 'react';
import {
  View, Text, Image,
  ScrollView, TextInput,
  StyleSheet, Button,
  FlatList,
} from 'react-native';

interface CourseGoal {
  text: string;
  id: string;
}

const App = () => {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState<CourseGoal[]>([]);

  function goalInputHandler(inputText: string) {
    setEnteredGoalText(inputText);
  };
  function addGoalHandler() {
    // setCourseGoals([...courseGoals, enteredGoalText]); not good way to update
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() } as CourseGoal
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputFlexBoxContainer}>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder='My goals!' />
        <Button title='Add goal' onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          renderItem= {(itemData) => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}> {itemData.item.text} </Text>
              </View>
            );
          }}
          keyExtractor={(item,index) => {
            return item.id;
          }}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
  },
  inputFlexBoxContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 3,
    borderBottomColor: 'orange',

  },
  textInput: {
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'red',
    padding: 8,
    width: '70%',
    marginRight: 8,
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'green',
  },
  goalText: {

    color: 'blue',
  },
})
export default App;