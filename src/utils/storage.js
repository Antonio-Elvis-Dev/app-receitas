import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getFavorites(key) {
  const favorites = await AsyncStorage.getItem(key);

  return JSON.parse(favorites) || [];
}

export async function saveFavorites(key, newItem) {
  let myFavorites = await getFavorites(key);

  let hasItem = myFavorites.some((item) => item.id === newItem.id);

  if (hasItem) {
    console.log("Já foi salvo");
    return;
  }
  myFavorites.push(newItem);

  await AsyncStorage.setItem(key, JSON.stringify(myFavorites));
  // console.log("Salvo com Sucesso");
}

export async function removeFavorite(id) {
  let receipes = await getFavorites("@appreceitas");

  let myfavorites = receipes.filter((item) => {
    return item.id !== id;
  });
  await AsyncStorage.setItem("@appreceitas", JSON.stringify(myfavorites));
  // console.log("Item Deletado");

  return myfavorites
}

export async function isFavorite(receipe) {

    let myReceipes = await  getFavorites("@appreceitas")

    const favorite = myReceipes.find(item = item.id === receipe.id)

    if(favorite){
        return true
    }else{
       return false
    }
}

