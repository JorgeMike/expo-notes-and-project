import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../styles/styles'
import { Link } from 'expo-router'

export default function about() {
  return (
    <View style={styles.container}>
      <Text>about</Text>
      <Link href={'/(tabs)/terms-of-policy'}>Read terms of the services</Link>
    </View>
  )
}