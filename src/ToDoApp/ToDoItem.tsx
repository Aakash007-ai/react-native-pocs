import {Text, View} from 'react-native';
import {ToDo} from './ToDo';
import CheckBox from '@react-native-community/checkbox';

interface ToDoItemProps {
  todo: ToDo;
  onComplete(toDoId: string): void;
}

const ToDoItem = ({todo, onComplete}: ToDoItemProps) => {
  return (
    <View>
      <CheckBox
        disabled={todo.completed}
        value={todo.completed}
        onValueChange={() => {
          onComplete(todo.id);
        }}
      />
      <View>
        <Text>{todo.name}</Text>
        <Text>{todo.description}</Text>
      </View>
    </View>
  );
};

export default ToDoItem;
