import { StyleSheet, Font } from "@react-pdf/renderer";

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
    marginTop: "47mm",
  },
  heading: {
    alignItems: "center",
    fontSize: 12,
    fontWeight: "bold",
    // fontStyle:
  },
  title: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
    textDecoration: "underline",
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
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 12,
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
    fontWeight: "bold",
    textDecoration: "underline",
  },
  bold: {
    fontWeight: "bold",
  },
});
