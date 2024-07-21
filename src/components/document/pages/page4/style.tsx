import { StyleSheet,Font } from "@react-pdf/renderer";


Font.register({
  family: "Noto Sans",
  fonts: [
    {
      src: "https://dgspjhhkvivhccolkflh.supabase.co/storage/v1/object/public/pdfassets/MedicalReportGenAssets/noto-sans.regular.ttf",
      fontStyle: "normal",
      fontWeight: "normal",
    },
    {
      src: "https://dgspjhhkvivhccolkflh.supabase.co/storage/v1/object/public/pdfassets/MedicalReportGenAssets/noto-sans.bold.ttf",
      fontStyle: "normal",
      fontWeight: "bold",
    }
  ]
});
export default StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 40,
    fontFamily: "Noto Sans",
    fontSize: 11,
  },
  body: {
    // marginTop: "48.25mm",
  },
  heading: {
    alignItems: "center",
    fontSize: 12,
    fontFamily: "Noto Sans",
    // fontStyle:
  },
  title: {
    fontSize: 14,
    // textAlign: "center",
    marginBottom: 20,
    fontFamily: "Noto Sans",
    fontWeight: "bold",
    // textDecoration: "underline",
  },
  infoGrid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
    fontWeight: "extrabold"
  },
  infoItem: {
    width: "50%",
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 12,
    fontFamily: "Noto Sans",  
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
    textDecoration: "underline",
  },
  list: {
    marginLeft: 20,
  },
  listItem: {
    marginBottom: 5,
  },
  boldUnderline: {
    fontFamily: "Noto Sans",
    fontWeight: "bold",
    textDecoration: "underline",
  },
  bold: {
    fontfamily: "Noto Sans",
    fontWeight: "bold",
  },
  tableContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  table: {
    display: "flex",
    flexDirection: "column",
    width: "70%",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomColor: "#000",
    borderBottomWidth: 1,
  },
  tableCol: {
    width: "50%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: 5,
    fontSize: 10,
    textAlign: "center",
  },
});
