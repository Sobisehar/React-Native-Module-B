import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function Cards({product}) {
  const handleBuyNow = () => {
    Alert.alert(`You bought: ${product.title}`);
  };

  return (
    <View style={styles.card}>
      <Image source={{uri: product.image}} style={styles.image} />
      <Text style={styles.title}>
        <Text style={{fontWeight: 'bold'}}>Title:   </Text>
        {product.title}
      </Text>
      <Text style={styles.price}>
        <Text style={{fontWeight: 'bold'}}>Price:  </Text>
        {product.price}
      </Text>
      <Text style={styles.price}>
        <Text style={{fontWeight: 'bold'}}>Description:  </Text>{' '}
        {product.description}
      </Text>
      <Text style={styles.price}>
        <Text style={{fontWeight: 'bold'}}>Category:  </Text> {product.category}
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleBuyNow}>
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f8f8f8',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    alignSelf: 'center',
  },
  title: {
    fontSize: 16,
    color: '#555',
  },
  price: {
    fontSize: 14,
    color: '#555',
  },
  Description: {
    fontSize: 14,
    color: '#555',
  },
  category: {
    fontSize: 14,
    color: '#555',
  },
  button: {
    backgroundColor: '#5f9ea0',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
