import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';


const Home = ({ navigation }) => {
return (
  <ScrollView style={styles.container}>
    <View>
      <Image style={styles.img} source={require('../assets/beers.png')}/>
      <TouchableOpacity onPress={() => navigation.navigate('Beers')}>
        <Text style={styles.title}>All Beers</Text>
      </TouchableOpacity>
      <Text style={styles.description}>
      Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis. Pra lá , depois divoltis porris, paradis. Mais vale um bebadis conhecidiss, que um  alcoolatra anonimis. Interagi no mé, cursus quis, vehicula ac nisi.
      </Text>
    </View>
    <View>
      <Image style={styles.img} source={require('../assets/random-beer.png')}/>
      <TouchableOpacity onPress={() => navigation.navigate('RandomBeer')}>
        <Text style={styles.title}>Random Beers</Text>
      </TouchableOpacity>
      <Text style={styles.description}>
      Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis. Pra lá , depois divoltis porris, paradis. Mais vale um bebadis conhecidiss, que um  alcoolatra anonimis. Interagi no mé, cursus quis, vehicula ac nisi.
      </Text>
    </View>
    <View>
      <Image style={styles.img} source={require('../assets/new-beer.png')}/>
      <TouchableOpacity onPress={() => navigation.navigate('NewBeer')}>
        <Text style={styles.title}>New Beer</Text>
      </TouchableOpacity>
      <Text style={styles.description}>
      Mussum Ipsum, cacilds vidis litro abertis. Suco de cevadiss deixa as pessoas mais interessantis. Pra lá , depois divoltis porris, paradis. Mais vale um bebadis conhecidiss, que um  alcoolatra anonimis. Interagi no mé, cursus quis, vehicula ac nisi.
      </Text>
    </View>
  </ScrollView>
)
};

const styles = StyleSheet.create({
  container:{
    padding: 10
  },
  img: {
    width: '100%',
    height: 200
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 5
  },
  description: {
    marginBottom: 20
  }
})

export default Home;