import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from './navigation';
import {Button, View} from 'react-native';
import React from 'react';
import {useQueryClient} from '@tanstack/react-query';
import AddToDoForm from './AddToDoForm';

type AddToDoScreenProps = NativeStackScreenProps<RootStackParamList>;

const AddToDoScreen = ({navigation}: AddToDoScreenProps) => {
  const [name, setName] = React.useState<string>('');
  const [description, setDescription] = React.useState<string>('');

  const queryClient = useQueryClient();

  React.useEffect(() => {
    navigation.setOptions({
      title: 'Done',
      headerRight: () => (
        <Button
          title="ToDoList"
          onPress={() => {
            console.log('add on mutation here');
            navigation.navigate('ToDoList');
          }}></Button>
      ),
    });
  }, [navigation, name, description]);

  return (
    <View>
      <AddToDoForm
        name={name}
        onChangeName={setName}
        description={description}
        onChangeDescription={setDescription}
      />
    </View>
  );
};

export default AddToDoScreen;
