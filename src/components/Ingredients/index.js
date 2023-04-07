import { StyleSheet, Text, View } from "react-native";

export default function Ingredients({data}) {
  return (
    <View style={styles.constainer}>
      <Text style={styles.name}>{data.name}</Text>
      <Text>{data.amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  constainer: {
    backgroundColor: "#fff",
    marginBottom: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    borderRadius: 4,
  },
  name: {
    fontWeight: 500,
    fontSize: 16,
  },
});
