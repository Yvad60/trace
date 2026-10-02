import { MaxContentWidth, Spacing } from "@/constants/theme";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SMSReaderClient } from "../services/SMSReader";

export default function HomeScreen() {
  const handlePress = async () => {
    try {
      const message = await SMSReaderClient.readSMSMessages();
      console.log("Recent messages:", message);
    } catch (error) {
      console.error("Error fetching recent messages:", error);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.heroSection}>
          <Text style={styles.title}>Trace</Text>
          <Text style={styles.heroSection}>Let's track some money!</Text>
        </View>
        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
          onPress={handlePress}
        >
          <Text style={styles.buttonLabel}>Migrate untracked transactions</Text>
        </Pressable>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.five,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Spacing.five,
    gap: Spacing.one,
  },
  title: {
    textAlign: "center",
  },
  code: {
    textTransform: "uppercase",
  },
  button: {
    backgroundColor: "#1C1C1E",
    paddingVertical: Spacing.three,
    paddingHorizontal: Spacing.five,
    borderRadius: Spacing.two,
  },
  buttonPressed: {
    opacity: 0.8,
  },
  buttonLabel: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
  },
});
