import Modal from "./Modal";

export default function Loading({ label }) {
  return (
    <Modal closeIcon={false}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
        <div className="spinner-border text-primary" role="status"></div>
        <span style={{ color: "white", marginTop: 20 }}>{label}</span>
      </div>
    </Modal>
  );
}
