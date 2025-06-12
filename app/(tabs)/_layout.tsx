import Icon from "@/components/icons/Icons";
import { BannedRoute } from "@/lib/config/tabs.config";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => {
        const isBanned = Object.values(BannedRoute).includes(
          route.name as BannedRoute
        );

        return {
          tabBarActiveTintColor: "#10A8E1",
          headerShown: false,
          tabBarStyle: isBanned
            ? { display: "none" }
            : { backgroundColor: "#ffffff", paddingTop: 10 },
        };
      }}
    >
      <Tabs.Screen
        name="(protected)/index"
        options={{
          title: "Accueil",
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              stroke={focused ? "#ffffff" : ""}
              fill={focused ? "#10A8E1" : ""}
            />
          ),
        }}
      />
    </Tabs>
  );
}
