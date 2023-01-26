import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import data from '../constants/Description'

const Description = () => {
    console.log("testing"+data.highlights)
  return (
    <View>
        <ScrollView>
        <View>
            <Text>About The Course </Text>
            <Text>Description: {data.course}</Text>
        </View>
        <View>
            
            <Text>Description: </Text>
            {(data.highlights).map(item => {
                return(
                    <Text> .  {item}</Text>
                )
            })}
        </View>
        <View>
            <Text>General Information </Text>
            <Text>Description: {data.course}</Text>
        </View>
        <View>
            <Text>About The Course </Text>
            <Text>Description: {data.course}</Text>
        </View>
        </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({})
export default Description