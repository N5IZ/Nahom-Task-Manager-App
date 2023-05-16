import React, { useState } from 'react';
import {
  TextInput,
  KeyboardAvoidingView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native';
import Task from './components/Task';
export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handAddTask = () => {
 
    setTaskItems([...taskItems, task]);
    setTask(null);
    
  };
  const CompliteTask = (index) =>{
     let itemCopy = [...taskItems];
     itemCopy.splice(index,1);
     setTaskItems(itemCopy);
  }
  return (
    
    <View style={styles.container}>
      <View style={styles.taskwraper}>
        <Text style={styles.sectionTitle}>Today Nahom Tasks</Text>
        <View style={styles.item}>
          {taskItems.map((item, index) => {
             return(

            <TouchableOpacity key={index} onPress={()=>CompliteTask(index)}> 
                 <Task  text={item} />
             </TouchableOpacity>
       
             )
          })}
        </View>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={"Write Nahom Task's"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskwraper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  item: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    height: 60,
    width: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});
