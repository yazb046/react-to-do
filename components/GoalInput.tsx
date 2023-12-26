import {
  StyleSheet, View, TextInput, Button, Modal, Image
} from 'react-native';
import { useState } from 'react';

function GoalInput(props: any) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(inputText: string) {
    setEnteredGoalText(inputText);
  };

  function privateAddGoalHandler() {
    props.onAddGoal(enteredGoalText);
  }

  function privateEndGoalHandler() {
    props.onEndGoal();
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputFlexBoxContainer}>
        <Image style = {styles.image} source={require('../assets/images/goal.jpg')}/>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder='My goals!' />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add goal' color='white' onPress={privateAddGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' color='red' onPress={privateEndGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputFlexBoxContainer: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,

  },
  image:{
    width: 100,
    height: 100,
  },
  textInput: {
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'red',
    color: 'white',
    padding: 8,
    width: '90%',
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'blue',
    width: 100,
    marginHorizontal: 8,
  },
});




export default GoalInput;