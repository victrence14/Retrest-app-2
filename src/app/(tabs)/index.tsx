import { Link } from "expo-router";
import { Pressable, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Welcome to Retrest
      </Text>
      <Link href="/onboarding" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Go to Onboarding</Text>
        </Pressable>
      </Link>
      <Link href="/(auth)/sign-in" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
      </Link>
      <Link href="/(auth)/sign-up" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    backgroundColor: "#fff9e3",
    padding: 24,
  },
  title: {
    color: "#081126",
    fontFamily: "sans-bold",
    fontSize: 24,
  },
  button: {
    minWidth: 220,
    alignItems: "center",
    borderRadius: 12,
    backgroundColor: "#081126",
    paddingHorizontal: 20,
    paddingVertical: 14,
  },
  buttonText: {
    color: "#ffffff",
    fontFamily: "sans-bold",
    fontSize: 16,
  },
});
