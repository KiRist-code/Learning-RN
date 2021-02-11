import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import Loading from "./src/Loading";
import * as Location from "expo-location";
import { render } from 'react-dom';
import { Alert } from "react-native";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getLocation = async () => {
    try {
      await Location.requestPermissionsAsync();
      const { 
        coords : { latitude, longitude }
      } = await Location.getCurrentPositionAsync();
      this.setState({ isLoading: false });
    } catch (error) {
      
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
}
