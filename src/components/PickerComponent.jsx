import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

import Colors from "../constants/Colors";

function PickerComponent({ width, dataArray }) {
  const data = dataArray;

  const [selectedItem, setSelectedItem] = useState(data[0]);

  return (
    <Picker
      style={[
        {
          color: Colors.black,
          height: 20,
        },
        { width: width },
      ]}
      selectedValue={selectedItem}
      onValueChange={(value) => setSelectedItem(value)}
      dropdownIconColor={Colors.black}
      mode="dropdown"
    >
      {data.map((item) => (
        <Picker.Item label={item.title} value={item.title} />
      ))}
    </Picker>
  );
}

export default PickerComponent;
