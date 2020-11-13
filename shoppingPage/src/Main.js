// Overall - 1
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Alert, TextInput } from 'react-native';
import proudctData from './product_data.json'
import { ProductCard } from './components'
const App = () => {
    const [searchValue, setSearchValue] = useState("");
    const [displayList, setDisplayList] = useState([])
    const renderListItem = ({ item }) => <ProductCard product={item} />
    useEffect(() => {
        // Alert.alert("Clarushop", "Hoşgeldiniz, keyifli alışverişler..");
        setDisplayList(proudctData)
    }, [])
    useEffect(() => {
        const filteredValue = proudctData.filter(item => {
            const text = searchValue.toUpperCase();
            const productTitle = item.title.toUpperCase();
            return productTitle.indexOf(text) > -1;
        })
        setDisplayList(filteredValue)
    }, [searchValue])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text style={styles.banner}>CLARUSHOP</Text>
                <View style={styles.searchBar}>
                    <TextInput
                        placeholder="Ürün ara..."
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
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        backgroundColor: '#ffc1e3'
    },
    searchBar: {
        backgroundColor: "#eceff1",
        // padding: 5,
        margin: 10,
        borderRadius: 10
    },
    searchText: {
        fontSize: 16,
    
    }
})