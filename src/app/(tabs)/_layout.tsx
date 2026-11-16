import { Tabs } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { tabs } from "../../../constants/data";
import { colors, components } from "../../../constants/theme";

const tabBar = components.tabBar;

const TabLayout = () => {
  const insets = useSafeAreaInsets();

  const TabIcon = ({ focused, icon }: TabIconProps) => {
    return (
      <View style={styles.iconFrame}>
        <View style={[styles.iconPill, focused && styles.iconPillActive]}>
          <Image source={icon} resizeMode="contain" style={styles.icon} />
        </View>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          left: tabBar.horizontalInset,
          right: tabBar.horizontalInset,
          bottom: Math.max(insets.bottom, tabBar.horizontalInset),
          height: tabBar.height,
          borderRadius: tabBar.radius,
          backgroundColor: colors.background,
          borderTopWidth: 1,
          borderColor: colors.border,
          elevation: 8,
          zIndex: 10,
        },
        tabBarItemStyle: {
          alignItems: "center",
          justifyContent: "center",
        },
        tabBarIconStyle: {
          width: tabBar.iconFrame,
          height: tabBar.iconFrame,
          alignItems: "center",
          justifyContent: "center",
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} icon={tab.icon} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({
  iconFrame: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  iconPill: {
    width: 48,
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 24,
  },
  iconPillActive: {
    backgroundColor: colors.accent,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
