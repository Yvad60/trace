import { MaxContentWidth, Spacing } from "@/constants/theme";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import apiClient from "../services/ApiClient";
import { SMSReaderClient } from "../services/SMSReader";

export default function HomeScreen() {
  const [latestSyncTime, setLatestSyncTime] = useState<string>("Monday, January 1, 2024, 12:00 PM");

  const handlePress = async () => {
    try {
      const transactionSms = await SMSReaderClient.readSMSMessages();
      await apiClient.sendTransactions(transactionSms);
    } catch (error) {
      console.error("Error fetching recent messages:", error);
    }
  };

  useEffect(() => {
    let subscription: { remove: () => void } | undefined;

    SMSReaderClient.setupSmsListener().then((sub) => {
      subscription = sub;
    });

    return () => {
      subscription?.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.heroSection}>
          <Text style={styles.title}>Trace</Text>
          <Text style={styles.subtitle}>Let's track some money!</Text>
          <Text style={styles.sychronizationTime}>Latest sync time: {latestSyncTime}</Text>
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
  subtitle: {
    textAlign: "center",
  },
  sychronizationTime: {
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
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
