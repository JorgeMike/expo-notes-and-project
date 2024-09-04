import { View, Text } from 'react-native'
import React from 'react'
import styles from '../../styles/styles';
import { useLocalSearchParams } from 'expo-router';
import { useRouteInfo } from 'expo-router/build/hooks';

export default function UserId() {
    const routeInfo = useRouteInfo();
    const localSearch = useLocalSearchParams()

    return (
        <View style={styles.container}>
            <Text>{routeInfo.params["user-id"]}</Text>
            <Text>{localSearch["user-id"]}</Text>
        </View >
    )
}