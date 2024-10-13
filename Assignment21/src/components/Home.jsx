import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import Cards from '../components/Cards';

const Home = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const response = await data.json();
    setProductData(response);
  };

  return (
    <ScrollView>
      <View>
        <Text>Products</Text>

        {productData.map((e) => {
          return (
            <Cards 
              key={e.id} 
              title={e.title} 
              desc={e.description} 
              img={e.image} 
            />
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Home;
