import {
  addSmsListener,
  getPermissionStatusAsync,
  getRecentMessages,
  requestPermissionsAsync,
  type RawSmsMessage,
} from "expo-transaction-sms-reader";

export type TransactionSmsMessages = {
  mtnMomo: RawSmsMessage[];
  bk: RawSmsMessage[];
};

const EMPTY_MESSAGES: TransactionSmsMessages = { mtnMomo: [], bk: [] };

class SMSReader {
  private MTN_MOMO_ADDRESS = "M-Money";
  private BK_E_BANK_ADDRESSES = ["BKeBANK", "BK BANK"];

  async readSMSMessages(): Promise<TransactionSmsMessages> {
    try {
      const permissionStatus = await getPermissionStatusAsync();
      if (permissionStatus !== "granted") {
        const requested = await requestPermissionsAsync();
        if (requested !== "granted") {
          console.warn(
            "Permission not granted. Please enable SMS permissions in your device settings.",
          );
          return EMPTY_MESSAGES;
        }
      }
      const messages = await getRecentMessages({
        limit: 500,
        senderAllowlist: [this.MTN_MOMO_ADDRESS, ...this.BK_E_BANK_ADDRESSES],
      });

      const sanitizedMessages = messages.map((message) => message.raw);

      const bkMessages = sanitizedMessages.filter((message) =>
        this.BK_E_BANK_ADDRESSES.includes(message.address),
      );

      const mtnMomoMessages = sanitizedMessages.filter(
        (message) => message.address === this.MTN_MOMO_ADDRESS,
      );

      return {
        mtnMomo: mtnMomoMessages,
        bk: bkMessages,
      };
    } catch (error) {
      console.error("Error reading SMS messages:", error);
      return EMPTY_MESSAGES;
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
