import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginBottom: 16,
    textAlign: "center",
  },
  icon: {
    justifyContent: "flex-start",
    height: 30,
    width: 30,
  },
  topHeading: {
    fontWeight: "heavy",
    fontSize: 20,
    flex: 1,
    alignItems: "center",
    marginRight: 3,
  },
  body: {
    marginLeft: 7,
    marginRight: 7,
  },
  container: {
    flexDirection: "column",
    padding: 10,
    border: "1 solid #ccc",
  },
  heading: {
    fontSize: 21,
    backgroundColor: "#d9d9d9",
    padding: 5,
    fontFamily: "Helvetica-Bold",
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "ultrabold",
  },
  table: {
    width: "auto",
    borderStyle: "solid",
    borderColor: "#fff",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    margin: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCol: {
    flex: 1,
    borderStyle: "solid",
    borderColor: "#fff",
    borderBottomWidth: 1,
    borderRightWidth: 1,
    padding: 5,
  },
  tableHeader: {
    backgroundColor: "#f0f0f0",
    // fontFamily: "Helvetica-Bold",
    fontSize: 13,
    fontWeight: "ultrabold",
  },
});

export default styles;
