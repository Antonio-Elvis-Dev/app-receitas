import { Text, View, StyleSheet } from "react-native";
import {View as ViewMoti} from 'moti'
export default function Logo() {
  return (
    <ViewMoti
    from={{
      opacity:0,
      translateX:-50
    }}
    animate={{
      opacity:1,
      translateX:0
    }}
    transition={{
      type:"spring",
      duration:800
    }}
    style={styles.logoArea}>
      <Text style={styles.logo}>Receita Fácil</Text>
    </ViewMoti>
  );
}

const styles = StyleSheet.create({
  logoArea: {
    backgroundColor: "#4cbe6c",
    alignSelf: "flex-start",
    padding: 8,
    paddingLeft: 16,
    paddingRight: 20,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomRightRadius: 32,
    marginBottom:8
  },

  logo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
