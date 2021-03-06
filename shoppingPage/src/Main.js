import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Alert, TextInput } from 'react-native';
import productData from './product_data.json'
import { ProductCard } from './components'
const App = () => {

    const [searchValue, setSearchValue] = useState("");

    const [displayList, setDisplayList] = useState([])

    const renderListItem = ({ item }) => <ProductCard product={item} />

    useEffect(() => {
        Alert.alert("Trend Shop", "Welcome, have a nice shopping...");
        setDisplayList(productData)
    }, [])

    useEffect(() => {
        const filteredValue = productData.filter(item => {
            const text = searchValue.toUpperCase();
            const productTitle = item.title.toUpperCase();
            return productTitle.indexOf(text) > -1;
        })

    setDisplayList(filteredValue)
    }, [searchValue])

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text style={styles.banner}>TREND SHOP</Text>
                <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Search a product..."
                        onChangeText={(value) => setSearchValue(value)}
                        style={styles.searchText}
                    />
                </View>
                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={displayList}
                    renderItem={renderListItem}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    )
}

export default App;
const styles = StyleSheet.create({
    banner: {
        color: '#00363a',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        backgroundColor: '#b6ffff',
        borderWidth: 5,
        borderRadius: 15,
        borderColor: '#00363a',
        margin: 20,
        padding: 10,
    },
    searchBar: {
        backgroundColor: "#eceff1",
        margin: 10,
        borderRadius: 10
    },
    searchText: {
        fontSize: 16,
    
    }
})