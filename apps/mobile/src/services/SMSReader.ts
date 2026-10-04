import {
  addSmsListener,
  getPermissionStatusAsync,
  getRecentMessages,
  requestPermissionsAsync,
} from "expo-transaction-sms-reader";

class SMSReader {
  async readSMSMessages() {
    try {
      const permissionStatus = await getPermissionStatusAsync();
      if (permissionStatus !== "granted") {
        const requested = await requestPermissionsAsync();
        if (requested !== "granted") {
          console.warn(
            "Permission not granted. Please enable SMS permissions in your device settings.",
          );
          return [];
        }
      }
      const messages = await getRecentMessages({
        limit: 5,
        senderAllowlist: ["MoKash"],
      });

      return messages;
    } catch (error) {
      console.error("Error reading SMS messages:", error);
      return [];
    }
  }

  async setupSmsListener() {
    const subscription = addSmsListener((message) => {
      console.log("New SMS received:", message);
    });
    return subscription;
  }
}

export const SMSReaderClient = new SMSReader();
