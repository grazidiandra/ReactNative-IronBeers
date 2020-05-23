import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home';
import Beers from './screens/Beers';
import BeerDetail from './screens/BeerDetail';
import RandomBeer from './screens/RandomBeer';
import NewBeer from './screens/NewBeer';


const RouteBeers = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RouteBeers.Navigator>
        <RouteBeers.Screen name="Home" component={Home} />
        <RouteBeers.Screen name="Beers" component={Beers} />
        <RouteBeers.Screen name="BeerDetail" component={BeerDetail} />
        <RouteBeers.Screen name="RandomBeer" component={RandomBeer} />
        <RouteBeers.Screen name="NewBeer" component={NewBeer} />
      </RouteBeers.Navigator>
    </NavigationContainer>
  );
}

export default App;