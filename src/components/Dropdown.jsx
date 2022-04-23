import { AntDesign } from "@expo/vector-icons";
import { Row, Text } from "native-base";
import React, { useState } from "react";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from "react-native-popup-menu";
import Layout from "../constants/Layout";

function Dropdown(props) {
  const { width } = Layout.window;
  const [value, setValue] = useState("Gemeldet");
  return (
    <Menu
      style={{ height: "50%", marginTop: 5 }}
      onSelect={(val) => setValue(val)}
    >
      <MenuTrigger
        customStyles={{
          triggerWrapper: {
            borderColor: "white",
            borderWidth: 0.5,
            height: "10%",
            justifyContent: "center",
            paddingLeft: 15,
            paddingRight: 10,
            borderRadius: 5,
          },
        }}
      >
        <Row w={"100%"} alignItems={"center"} justifyContent="space-between">
          <Text fontSize={14} color={"white"}>
            {value}
          </Text>
          <AntDesign name="caretdown" size={14} color={"white"} />
        </Row>
      </MenuTrigger>
      <MenuOptions
        customStyles={{
          optionsContainer: { marginTop: -15, width: width * 0.825 },
        }}
      >
        <MenuOption text="Gemeldet" value="Gemeldet" />
        <MenuOption text="one" value="one" />
        <MenuOption text="two" value="two" />
        <MenuOption text="three" value="three" />
      </MenuOptions>
    </Menu>
  );
}

export default Dropdown;
