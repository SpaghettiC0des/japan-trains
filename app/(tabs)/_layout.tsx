import { Atom, AudioWaveform } from "@tamagui/lucide-icons";
import { Link, Tabs } from "expo-router";
import { Button, useTheme } from "tamagui";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.red10.val,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          tabBarIcon: ({ color }) => <Atom color={color} />,
          headerRight: () => (
            <Link asChild href="/modal">
              <Button bg="$purple8" color="$purple12" mr="$4">
                Hello!
              </Button>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ color }) => <AudioWaveform color={color} />,
        }}
      />
    </Tabs>
  );
}
