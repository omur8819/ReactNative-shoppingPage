import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const ProductCard = ({ product }) => {

    const inStock = () => {
        if(product.inStock === true)
            return null
        else 
            return (
                <Text>Not in stock</Text>
            )
        
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: product.imgURL }}
                style={styles.image}
            />
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <Text>{product.title}</Text>
                <Text style={{ fontWeight: 'bold' }}>{product.price}</Text>
                <Text>{inStock()}</Text>
            </View>
        </View>
    )
}
export { ProductCard }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 1,
        padding: 10,
        margin: 5,
        borderRadius: 10,
        borderColor: '#e0e0e0'
    },
    image: {
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain'
    }
})