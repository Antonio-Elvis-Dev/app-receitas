import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { useRoute } from "@react-navigation/native";

import FoodList from "../../components/FoodList";
import api from "../../services/api";

export default function Search() {
  const route = useRoute();
  const [receipes, setReceipes] = useState([]);

  useEffect(() => {
    async function fetchReceipes() {
      const response = await api.get(`/foods?name_like=${route.params?.name}`);
      setReceipes(response.data);
    }
    fetchReceipes();
  }, [route.params?.name]);

  return (
    <View style={styles.container}>
       <FlatList
      ListEmptyComponent={()=>(<Text style={styles.text}>Busca Não Encontrada</Text>)}
      showsVerticalScrollIndicator={false}
      data={receipes}
      keyExtractor={(item)=>String(item.id)}
      renderItem={({item})=><FoodList data={item}/>}
      
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 14,
  },
  text:{
    fontSize:18
  }
});
