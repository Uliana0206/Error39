import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Create = () => {
  return (
    <View>
      < TextInput 
       placeholder='ФИО'
      />
      < TextInput
       placeholder='Должность'
      />
      <TextInput
      placeholder='Название компании'
      />
      <Text>*не обязательно</Text>
      <TextInput
      placeholder='Сфера деятельности'
      />
      <TextInput
      placeholder='Описание'
      />
      <TextInput
      placeholder='Ссылка на сайт'
      />
      <Text>*не обязательно</Text>
      <TextInput
      placeholder='Телефон'
      />
      <TextInput
      placeholder='ТГ'
      />
      <TextInput 
      placeholder='Дата и время'/>
      <TouchableOpacity>
        <View>
            <Text>Создать</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default Create