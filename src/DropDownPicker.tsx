import React from 'react';
import {View, Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function DropDownPickerScreen() {
  const [open, setOpen] = React.useState(false); //use to make dropdown open default or not
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    {label: 'Apple', value: 'apple label'}, //value and label
    {
      label: 'Banana',
      value: 'banana label',
      //   icon: () => (
      //     <Image source={require('./assets/icon.png')} style={styles.iconStyle} />
      //   ),
    },
  ]);
  return (
    <View
      style={{
        flex: 1,
        //flexDirection: 'row',
        alignItems: 'center', //cross axis
        justifyContent: 'center', //main axis
        padding: 10,
      }}>
      <Text>Home Screen</Text>
      <DropDownPicker
        //value
        // multiple={true}
        // min={0} //Specifies the minimum number of items. type number default null
        // max={2} //Specifies the maximum number of items. default null
        //these above used for multiple selection
        open={open}
        value={value}
        items={items}
        //callbacks
        //setOpen={setOpen}
        setOpen={open => {
          console.log('setOpen callback of dropdown');
          setOpen(open);
        }}
        setValue={setValue}
        setItems={setItems}
        onChangeValue={value => {
          console.log('onChange callback of dropdown : ', value);
        }}
        // onSelectItem={item => {
        //   console.log('onSelectItem of dropdown : ', item);
        // }}
        // onPress={open => console.log('was the picker open?', open)}
        // onClose={() => console.log('bye!')}
        // onOpen={() => console.log('hi! ')}
        //styling props
        // props={{}} //Adds native props for the container TouchableOpacity.
        // itemProps={{}} //Adds native props for the TouchableOpacity of each item.
        // containerProps={{}} //Adds native props for the container. (type) view props
        // labelProps={{numberOfLines: 1}} //Adds native props for the Text element of the selected item.(type) text props
        // disabled={true} //Disables the picker. default false
        // maxHeight={200} //Max height of the drop-down box. default 200
        // disableBorderRadius={true} //Disables changing the border radius when opening.default false
        // stickyHeader={true} //Makes categories stick to the top of the screen until the next one pushes it off.
        // autoScroll={true} //automatically scroll to first selected item
        // testID="picker-testid" //Used to locate the picker in end-to-end tests.
        //zIndex={1000} //Specifies the stack order. default 5000
        //zIndexInverse={1000} //Specifies the inverse stack order. default 6000
        style={{
          //backgroundColor: 'crimson', //style of visible top container
          width: '50%',
          height: 'auto', //always use height as auto as it start to take bottom space for upcoming container
          // borderWidth: 10,
        }}
        containerStyle={
          //don't use this
          {
            //container holding top dropdown make incompatible
            // backgroundColor: 'crimson',
          }
        }
        textStyle={{
          fontSize: 15, //text style of top container
        }}
        labelStyle={{
          //can't see effect of this
          fontWeight: 'bold',
          fontSize: 25,
        }}
        //now
        placeholder="Default placeholder"
        placeholderStyle={{
          //used when an item got selected make it similar to placeholder so use by default
          color: 'grey',
          fontWeight: 'bold',
        }}
        //showArrowIcon={false} //arrow icon on default to true
        showTickIcon={false} //Specifies if the tick icon should be visible.
      />
      <Text>Dropdown values are</Text>
      <Text>open : {open}</Text>
      <Text>value : {value}</Text>
      <Text>items : {} : it gives error on items as it is iterable item</Text>
      {value == 'apple label' ? (
        <>
          <Text>based on string we dispaly content</Text>
        </>
      ) : null}
    </View>
  );
}

export default DropDownPickerScreen;
