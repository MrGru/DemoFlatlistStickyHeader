import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";

class App extends Component {
  renderItem(item) {
    if (item.key == "0") {
      return (
        <View style={{ backgroundColor: "red" }}>
          <Text style={{ height: 200 }}>Render View </Text>
        </View>
      );
    } else if (item.key == "1") {
      return (
        <View style={{ backgroundColor: "blue" }}>
          <Text style={{ height: 60 }}>Header View</Text>
        </View>
      );
    } else {
      return (
        <View style={{ backgroundColor: "green" }}>
          <Text style={{ height: 80 }}> Item view</Text>
        </View>
      );
    }
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={[
            { key: "0" },
            { key: "1" },
            { key: "2" },
            { key: "3" },
            { key: "4" },
            { key: "5" },
            { key: "6" },
            { key: "7" },
            { key: "8" },
            { key: "9" },
            { key: "10" },
            { key: "11" },
            { key: "12" },
            { key: "13" },
            { key: "14" }
          ]}
          renderItem={({ item }) => this.renderItem(item)}
          stickyHeaderIndices={[1]}
        />
      </View>
    );
  }
}

export default App;
