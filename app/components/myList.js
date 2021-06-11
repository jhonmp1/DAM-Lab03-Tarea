import React, { Component } from 'react';
import {View, Text, StatusBar, FlatList, StyleSheet, Image} from 'react-native';

const data = [
    {
      id: 1,
      image: 'https://www.hola.com/imagenes/estar-bien/20180925130054/consejos-para-cuidar-a-un-gatito-recien-nacido-cs/0-601-526/cuidardgatito-t.jpg',
      name: 'Mostasa',
      pet: 'Gato',
      state: 'Adoptalo',
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/736x/cd/f5/28/cdf52848aa1fd0d8bda9086789a665d0.jpg',
      name: 'Bonny y Clay',
      pet: 'Gato',
      state: 'Adoptalo',
    },
    {
      id: 3,
      image: 'https://i.blogs.es/4fcb17/cat-1045782_1920/450_1000.jpg',
      name: 'Michi',
      pet: 'Gato',
      state: 'Adoptado',
    },
    {
        id: 4,
        image: 'https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg',
        name: 'Bruno',
        pet: 'Perro',
        state: 'Adoptado',
      }
];

const Item = ({ image,name,pet,state }) => (
    <View style={styles.item}>
        <Image style={styles.image} source={{uri:image}}/>
        <View>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.pet}>{pet}</Text>
            <Text style={styles.state}>{state}</Text>
        </View>
    </View>
  );

const renderItem = ({ item }) => (
    <Item image={item.image} name={item.name} pet={item.pet} state={item.state} />
);

const MyList = () => {
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: 'yellow',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection:'row',
        paddingTop:15,
        paddingLeft: 15,
    },
    image: {
        width: 100, 
        height: 100,
    },
    name: {
        fontSize: 18,
        paddingLeft: 15,
    },
    pet: {
        color: 'red',
        paddingLeft: 15,
    },
    state: {
        color: 'orange',
        paddingLeft: 15,
    },
});

export default MyList;