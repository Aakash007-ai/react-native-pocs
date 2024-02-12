import {FlatList, View} from 'react-native';
import {ToDo} from './ToDo';
import ToDoItem from './ToDoItem';

interface ToDoListProps {
  todo: ToDo[];
  onCompleteToDo: (todoId: string) => void;
}

const ToDoList = ({todo, onCompleteToDo}: ToDoListProps) => {
  return (
    <View>
      <FlatList
        data={todo}
        renderItem={({item}) => {
          return <ToDoItem todo={item} onComplete={onCompleteToDo} />;
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ToDoList;
