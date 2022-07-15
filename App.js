import { BooksContextProvider } from './hooks/BooksContext';
import Layout from './components/Layout';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CreateBook from './components/InsertBook';

export default function App() {
  const Stack = createStackNavigator()
  
  return (
    <BooksContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='BookList'>
          <Stack.Screen name='BookList' component={Layout} />
          <Stack.Screen name='CreateBook' component={CreateBook} />
        </Stack.Navigator>
      </NavigationContainer>
    </BooksContextProvider>
  );
}
