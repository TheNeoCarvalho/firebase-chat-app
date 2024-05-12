import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function SignIn() {
  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View className="flex-1">
        <View className="items-center">
          <Image
            style={{
              paddingHorizontal: wp(10),
              resizeMode: "contain",
              paddingTop: hp(40),
            }}
            source={require("../assets/images/logo.png")}
          />
        </View>

        <View className="gap-10">
          <View className="gap-0 px-8">
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
            >
              <TextInput
                className="flex-1 font-semibold text-neutral-700"
                style={{ fontSize: hp(2) }}
                placeholder="Email"
                placeholderTextColor={"gray"}
              />
            </View>

            <View className="gap-3">
              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-2xl"
              >
                <TextInput
                  secureTextEntry
                  className="flex-1 font-semibold text-neutral-700"
                  style={{ fontSize: hp(2) }}
                  placeholder="Password"
                  placeholderTextColor={"gray"}
                />
              </View>
              <Text
                style={{ fontSize: hp(1.8) }}
                className="text-right font-semibold text-neutral-500"
              >
                Esqueceu a senha?{" "}
              </Text>
            </View>
            <Pressable className="bg-indigo-500 px-4 py-2 rounded-sm mt-16">
              <Text
                style={{ fontSize: hp(2) }}
                className="text-white text-center font-bold tracking-wider "
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
