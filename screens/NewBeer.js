import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Alert, TouchableOpacity, Keyboard } from 'react-native';
import axios from 'axios';

const NewBeer = () => {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState('');
  const [contributedBy, setContributedBy] = useState('');

  const handleForm = () => {
    if(!name || !tagline || !description ) {
      Alert.alert('Please enter a name, tagline and description')
    } else {
      axios.post("https://ih-beers-api2.herokuapp.com/beers/new", {
        name,
        tagline,
        description,
        firstBrewed,
        brewersTips,
        attenuationLevel,
        contributedBy
      })
      .then(() => {
        setName(''),
        setTagline(''),
        setDescription(''),
        setFirstBrewed(''),
        setBrewersTips('')
        setAttenuationLevel(''),
        setContributedBy('')
      })
      .catch(error => {
        console.log(error)
      });
    }
  };

  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput value={name} onChangeText={value => setName(value)} style={styles.input} placeholder='name' onSubmitEditing={() => tagline.focus()} onSubmitEditing={() => { input_2.focus(); }}/> 

      <TextInput value={tagline} onChangeText={value => setTagline(value)} style={styles.input} placeholder='tagline' ref={(input) => { input_2 = input; }} onSubmitEditing={() => { input_3.focus()}}/> 

      <TextInput  multiline  value={description} onChangeText={value => setDescription(value)} style={styles.input} placeholder='description' ref={(input) => { input_3 = input }}/> 

      <TextInput value={firstBrewed} onChangeText={value => setFirstBrewed(value)} style={styles.input} placeholder='first brewed'/> 

      <TextInput value={brewersTips} onChangeText={value => setBrewersTips(value)} style={styles.input} placeholder='brewers tips'/> 

      <TextInput value={attenuationLevel} onChangeText={value => setAttenuationLevel(value)} keyboardType='numeric' style={styles.input} placeholder='attenuation level'/> 
      <TextInput value={contributedBy} onChangeText={value => setContributedBy(value)} style={styles.input} placeholder='contribuited by'/> 
      <TouchableOpacity onPress={handleForm} style={styles.button}>
        <Text style={styles.buttonText}>Submit a new beer!</Text>
      </TouchableOpacity>
    </ScrollView>
  )
};


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 50
  },
  input: {
    borderColor: 'grey',
    padding: 5,
    borderWidth: 1,
    margin: 10,
    borderRadius: 10,
    width: 250
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#1ba0f1',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 250,
    marginTop: 30
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
});

export default NewBeer;