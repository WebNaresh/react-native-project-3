import React from "react";
import { StyleSheet } from "react-native";
import Steps from "./step";

const List = ({ array = [] }) => {
  return array.map((item) => <Steps key={item}>{item}</Steps>);
};

export default List;

const styles = StyleSheet.create({});
