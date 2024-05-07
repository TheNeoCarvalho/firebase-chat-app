import { Slot } from "expo-router";
import React from "react";
import { View } from "react-native";
import "../global.css";
export default function Layout() {
  return (
    <View className="flex-1">
      <Slot />
    </View>
  );
}
