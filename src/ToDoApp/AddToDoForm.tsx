import {Text, TextInput, View} from 'react-native';

interface AddToDoFormProps {
  name: string;
  onChangeName: (name: string) => void;
  description: string;
  onChangeDescription: (name: string) => void;
}

const AddToDoForm = ({
  name,
  onChangeName,
  description,
  onChangeDescription,
}: AddToDoFormProps) => {
  return (
    <View>
      <View>
        <Text style={{}}>Name</Text>
        <TextInput style={{}} value={name} onChangeText={onChangeName} />
      </View>
      <View>
        <Text>Description</Text>
        <TextInput
          style={{}}
          value={description}
          onChangeText={onChangeDescription}
        />
      </View>
    </View>
  );
};

export default AddToDoForm;
