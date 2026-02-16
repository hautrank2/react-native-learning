import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

type TodoInputProps = {
  onSave: (value: string) => void;
  onClose: () => void;
};
export const TodoInput = ({ onSave, onClose }: TodoInputProps) => {
  const [value, setValue] = useState("");
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Enter your goal:</Text>
        <TextInput value={value} onChangeText={setValue} style={styles.input} />
      </View>
      <View style={styles.btnContainer}>
        <Button title="Cancel" onPress={() => onClose()} />
        <Button
          title="Add"
          color={"#ff00bf"}
          onPress={() => {
            onSave(value);
            onClose();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    backgroundColor: "#430073",
    color: "#fff",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
  },
  title: {
    color: "#fff",
    fontWeight: 500,
    marginBottom: 4,
  },
  btnContainer: {
    display: "flex",
    gap: 4,
    justifyContent: "flex-end",
    flexDirection: "row",
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#0c000b",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#560161",
    color: "#fff",
  },
});
