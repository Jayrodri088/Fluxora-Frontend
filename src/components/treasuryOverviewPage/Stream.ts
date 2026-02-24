export interface Stream {
  name: string;
  id: string;
  recipient: string;
  rate: string;
  status: "Active" | "Paused" | "Completed";
}