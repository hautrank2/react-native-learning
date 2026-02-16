import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import { GoalModel } from ".";

export const TodoItem = ({
  data,
  onDelete,
}: {
  data: GoalModel;
  onDelete: () => void;
}) => {
  return (
    <Pressable
      onPress={onDelete.bind(this)}
      android_ripple={{ color: "#8d006e" }}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#af058a" : "#8d006e",
        },
        styles.container,
      ]}
    >
      <Text style={styles.title}>{data.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 8,
    marginVertical: 4,
  },
  title: {
    color: "#fff",
  },
});
