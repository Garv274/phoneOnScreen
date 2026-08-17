import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.ipadScreen}>
      <View style={styles.phoneContainer}>
        <Text>Hi MAD</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  ipadScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
  },

  phoneContainer: {
    width: 350,
    height: 700,
    backgroundColor: "white",
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#222",
    paddingTop: 20,
  },
});
