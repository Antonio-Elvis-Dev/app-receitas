import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import Logo from "../../components/Logo";

export default function Favorites() {
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Text> Favoritos</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f9ff",
    paddingTop: 36,
    paddingStart: 14,
    paddingEnd: 14, 
  },
});
