export default function Landing() {
  return <div style={styles.container}></div>;
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "calc(100vh - 72px)",
    padding: "4rem 2rem",
  },
};
