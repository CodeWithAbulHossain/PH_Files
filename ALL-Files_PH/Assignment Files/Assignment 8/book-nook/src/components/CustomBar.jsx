const CustomBar = ({ book }) => {
  const { bookName, totalPages } = book;
  return (
    <div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <div style={{ width: "150px", fontWeight: "bold" }}>{bookName}</div>
        <div
          style={{
            flex: 1,
            height: "20px",
            backgroundColor: "#ddd",
            borderRadius: "10px",
            marginRight: "10px",
            position: "relative",
          }}
        >
          <div
            style={{
              height: "100%",
              backgroundColor: "#8884d8",
              borderRadius: "50px",
              width,
            }}
          ></div>
        </div>
        <div style={{ fontSize: "0.8rem" }}>{totalPages}</div>
      </div>
    </div>
  );
};

export default CustomBar;
