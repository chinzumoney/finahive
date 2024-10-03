// Enum for transaction statuses
export enum Status {
  PENDING = "pending",
  COMPLETED = "completed",
  FAILED = "failed",
  CANCELLED = "cancelled",
  PROCESSING = "processing",
}
export const transactions: Transaction[] = [
  {
    uid: "4ebe76e1-a4a6-4866-bdee-97ce650e97a9",
    created_at: "12-04-2024",
    updated_at: "12-04-2024",
    transaction_type: "deposit",
    user_id: "4ebe76e1-a4a6-4866-bdee-97ce650e97a9",
    domain: "finahive.online",
    status: Status.PENDING,
    amount: 20000,
    recipientName: "Boris Markov",
    recipientBank: "Kirrilov Monumentals",
  },
  {
    uid: "4ebe76e1-a4a6-4866-bdee-97ce650e97dd",
    created_at: "12-04-2024",
    updated_at: "12-04-2024",
    transaction_type: "deposit",
    user_id: "4ebe76e1-a4a6-4866-bdee-97ce650e97a9",
    domain: "finahive.online",
    status: Status.COMPLETED,
    amount: 20000,
    recipientName: "Boris Markov",
    recipientBank: "Kirrilov Monumentals",
  },
  {
    uid: "4ebe76e1-a4a6-4866-bdee-97ce6ikd97a9",
    created_at: "12-04-2024",
    updated_at: "12-04-2024",
    transaction_type: "deposit",
    user_id: "4ebe76e1-a4a6-4866-bdee-97ce650e97a9",
    domain: "finahive.online",
    status: Status.FAILED,
    amount: 20000,
    recipientName: "Boris Markov",
    recipientBank: "Kirrilov Monumentals",
  },
];
