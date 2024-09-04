import React from 'react'
import { Tabs } from 'expo-router'

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='terms-of-policy'
        options={{
          href: null
        }} />
      <Tabs.Screen
        name='[user-id]'
        options={{
          title: "hola",
          href: {
            pathname: "/[user-id]",
            params: {
              "user-id": "jorge123"
            }
          }
        }}
      />
    </Tabs>
  )
}