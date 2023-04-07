import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Home from "../pages/Home";
import Detaill from "../pages/Detaill";
import Favorites from "../pages/Favorites";
import Search from "../pages/Search";
import StackRoutes from "./stackRoutes";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#121212",

        tabBarStyle: {
          backgroundColor: "#FFF",
          borderTopWidth: 0,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={StackRoutes}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color="#000" />;
            }
            return <Ionicons name="home-outline" color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
             return <Ionicons name="heart" size={size} color="#ff4141" />;
            }
            return <Ionicons name="heart-outline" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}
