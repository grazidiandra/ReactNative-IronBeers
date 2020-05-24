import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';



const Beers = ({ navigation }) => {
  const [listOfBeers, setListofBeers] = useState([]);
  const [spinner, setSpiner] = useState(true)

  const getAllbeers = useCallback(() =>{
    axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
    .then(response => {
      setListofBeers(response.data);
      setSpiner(!spinner);
    })
    .catch((err)=>{
      console.log(err)
   })
  },[]);

  useEffect(() => {
    getAllbeers()
  }, []);

  return (
    <>
      <Spinner style={styles.spinner} visible={spinner} textContent={''}/>
      <FlatList data={listOfBeers} 
        keyExtractor={item => item._id}
        renderItem={({item}) => (
          <View style={styles.containerBeer}>
            <Image style={styles.imgBeer} source={{uri: item.image_url}}/>
            <TouchableOpacity onPress={() => navigation.navigate('BeerDetail', {beerId: item._id})}>
              <Text style={styles.titleBeer}>{item.name}</Text>
            </TouchableOpacity>
            <Text style={styles.taglineBeer}>{item.tagline}</Text>
            <Text style={styles.contributedBeer}>{item.contributed_by}</Text>
          </View>
        )}
      />
    </>
  )
};

const styles = StyleSheet.create({
  containerBeer: {
    margin: 20,
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems:'center',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  imgBeer:{
    height: 200,
    width: 80,
    resizeMode: 'contain'
  },
  titleBeer: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10
  },
  taglineBeer: {
    marginHorizontal: 30,
    marginVertical: 10,
    fontSize: 14,
  },
  contributedBeer: {
    color: 'grey',
    fontSize: 12,
  }
});

export default Beers;