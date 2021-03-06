import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';


const BeerDetail = ({ route }) => {
  const beerId = route.params.beerId || null;
  const [beerDetail, setbeerDetail] = useState({});
  const [spinner, setSpiner] = useState(true)

  const getBeer = useCallback(() => {
      axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then(response => {
        setbeerDetail(response.data)
        setSpiner(!spinner)
      })
      .catch(err => {
        console.log(err);
      }) 
    }, [],
  )

  useEffect(() => {
    getBeer();
  }, [])

  return ( 
    <ScrollView contentContainerStyle={styles.containerBeer}>
      <Spinner style={styles.spinner} visible={spinner} textContent={''}/>
      <Image style={styles.imgBeer} source={{uri: beerDetail.image_url}}/>
      <Text style={styles.titleBeer}>{beerDetail.name}</Text>
      <Text style={styles.taglineBeer}>{beerDetail.tagline}</Text>
      <View style={styles.containerBeerDetail}>
        <Text style={styles.beerDetail}><Text style={{fontWeight: 'bold'}}>Attenuation Level:</Text> {beerDetail.attenuation_level}</Text>
        <Text style={styles.beerDetail}><Text style={{fontWeight: 'bold'}}>First Brewed:</Text> {beerDetail.first_brewed}</Text>
        <Text style={styles.beerDetail}><Text style={{fontWeight: 'bold'}}>Description:</Text> {beerDetail.description}</Text>
      </View>
      <Text style={styles.contributedBeer}>{beerDetail.contributed_by}</Text>
    </ScrollView>  
  ) 

};

const styles = StyleSheet.create({
  containerBeer: {
    margin: 30,
    paddingBottom: 50,
    alignItems:'center',
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
    marginHorizontal: 40,
    marginVertical: 10,
    fontSize: 14,
    fontStyle: 'italic'
  },
  contributedBeer: {
    color: 'grey',
    fontSize: 12,
  },
  containerBeerDetail: {
    alignItems: 'flex-start',
    marginBottom: 10
  },
  beerDetail: {
    fontSize: 14,
    marginVertical: 5,
  },
  spinner:{
    color: 'white'
  },
});

export default BeerDetail;