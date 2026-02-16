import React, { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";

export type GoalModel = {
  id: string;
  title: string;
};
export const Todo = () => {
  const [openModal, setOpenModal] = useState(false);
  const [goals, setGoals] = useState<GoalModel[]>([]);

  return (
    <View style={styles.conatiner}>
      <Image style={styles.logo} source={require("@/assets/logo.png")} />

      <Button title="Add goals" onPress={() => setOpenModal(true)} />

      <View style={styles.goalContainer}>
        <Text style={styles.text}>Goals:</Text>
        <FlatList<GoalModel>
          data={goals}
          renderItem={(item) => (
            <TodoItem
              data={item.item}
              onDelete={() =>
                setGoals((pre) => pre.filter((e) => e.id !== item.item.id))
              }
            />
          )}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
      </View>

      <Modal visible={openModal} animationType="slide" style={styles.modal}>
        <TodoInput
          onSave={(v) => {
            setGoals((pre) => [
              ...pre,
              { id: Math.random().toString(), title: v },
            ]);
          }}
          onClose={() => setOpenModal(false)}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    padding: 16,
    paddingTop: 32,
  },
  addBtn: {},
  list: {
    marginTop: 4,
  },
  logo: {
    width: 64,
    height: 64,
    alignSelf: "center",
    marginBottom: 16,
  },
  goalContainer: {
    marginTop: 8,
  },
  text: { color: "#fff", fontSize: 16, fontWeight: 500 },
  modal: {},
});
