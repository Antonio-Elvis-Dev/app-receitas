import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detaill from "../pages/Detaill";
import Home from "../pages/Home";
import Search from "../pages/Search";

export default function StackRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="Detaill" component={Detaill} 
       options={{
        title:"Detalhes da Receita"
    }}
      />
      <Stack.Screen name="Search" component={Search}
       options={{
        title:"Veja o que encontramos"
    }}
      />
    </Stack.Navigator>
  );
}
