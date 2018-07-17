import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, FlatList, Image, ActivityIndicator,} from 'react-native';
import axios from 'axios'


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            animating: false

        }
    }
    getData = () => {
        this.setState({ animating: true })
        const url = 'http://colorme.vn:8000/products'
        axios.get(url)
            .then((res) =>
                this.setState({
                    products: res.data.products,
                    animating: false
                })
            )
    }
    render() {

        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                {this.state.animating ?
                    <ActivityIndicator size="large" color="#0000ff" /> : null

                }

                <FlatList
                    data={this.state.products}
                    renderItem={
                        ({ item }) => (
                            <View>
                                <TouchableOpacity  onPress={() => this.props.navigation.navigate('Message',{ title: item.title,author:item.author.name,email:item.author.email,phone:item.author.phone})}>
                                <Text>{item.title}</Text>    
                            <Image source={{ uri: item.thumb_url }} style={{ width: 400, height: 400 }} />
                            </TouchableOpacity>
                            </View>)} />
                <TouchableOpacity onPress={this.getData}>
                    <Text>getData</Text>
                </TouchableOpacity>

            </View>
        );
    }
}
