import { UserNoteProps } from "@/lib/interfaces/note.interface";
import { StyleSheet, Text, View } from "react-native";

export const CurrentUserNote = ({ userNote }: UserNoteProps) => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.text}>{userNote.courseTitle}</Text>
        <Text style={style.text}>{userNote.courseDate}</Text>
      </View>
      <View style={style.noteContainer}>
        <Text style={style.noteText}>
          {userNote.courseNote % 1 === 0
            ? `${userNote.courseNote}.00`
            : userNote.courseNote.toFixed(2)}
        </Text>
        <Text style={style.subNoteText}>/{userNote.courseSubNote}</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#F5FDFF",
    borderWidth: 1,
    borderColor: "#A3E6FA",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: 190,
    justifyContent: "space-between",
    backgroundColor: "#322783",
    padding: 5,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
  noteContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 2,
    paddingVertical: 24,
  },
  noteText: {
    fontSize: 22,
    fontWeight: "600",
  },
  subNoteText: {
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 2,
  },
});
