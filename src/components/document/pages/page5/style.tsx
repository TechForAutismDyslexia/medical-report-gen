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
  },
  paragraph: {
    fontSize: 12,
    marginBottom: 10,
    
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
  },
  boldUnderline: {
    fontSize : 12,
    fontWeight: "bold",
    textDecoration: "underline",
  },
  graph: {
    height: 300,
    backgroundColor: "lightgrey",
  }
});
