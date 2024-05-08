import { Slot, useSegments } from "expo-router";
import React, { useEffect } from "react";
import { AuthContextPriovider, userAuth } from "../context/authContext";
import "../global.css";

const MainLayout = () => {
  const { isAuthenticaded } = userAuth();
  const segments = useSegments();

  useEffect(() => {
    if (typeof isAuthenticaded == "undefined") return;
    const inApp = segments[0] == "(app)";
    if (isAuthenticaded && !inApp) { 
      
     }


  }, [isAuthenticaded]);
  return <Slot />;
};

export default function RootLayout() {
  return (
    <AuthContextPriovider>
      <MainLayout />
    </AuthContextPriovider>
  );
}
