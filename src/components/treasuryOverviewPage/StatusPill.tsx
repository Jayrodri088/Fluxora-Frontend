interface Props {
  status: "Active" | "Paused" | "Completed";
}

export default function StatusPill({ status }: Props) {
  const styles: Record<string, string> = {
    Active: "bg-green-200/50 text-green-700",
    Paused: "bg-orange-300/50 text-yellow-700",
    Completed: "bg-blue-300/50 text-blue-600 ",
  };

  return (
    <span
      className={`px-3 py-1 rounded-md text-sm font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}