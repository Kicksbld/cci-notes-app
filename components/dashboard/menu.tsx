import { StyleSheet, Text, View } from "react-native";
import CAPICON from "@/assets/images/icons/dashboard/graduation-cap.svg";
import CHEVRON from "@/assets/images/icons/dashboard/chevron-down.svg";

interface ContextMenuProps {
  connectedUser: string;
}

export const CurrentUserContextMenu = ({ connectedUser }: ContextMenuProps) => {
  return (
    <View style={style.container}>
      <View style={style.leftRow}>
        <CAPICON width={24} height={24} />
        <Text style={style.text}>Mon compte</Text>
      </View>
      <View style={style.rightRow}>
        <Text style={[style.text, style.blueText]}>{connectedUser}</Text>
        <CHEVRON width={24} height={24} />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
  },
  text: {
    fontWeight: "600",
    fontSize: 16,
    textTransform: "capitalize",
  },
  blueText: {
    color: "#0BBAEF",
  },
  leftRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  rightRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
