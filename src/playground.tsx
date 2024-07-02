import ReactPDF, { Font } from "@react-pdf/renderer";
import {
  View,
  // Image,
  Text,
  Page,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

export default function MyDocument() {
  return (
    <Document>
      <Page style={styles.page}>
        <View>
          <Text>Hello World!</Text>
        </View>
      </Page>
    </Document>
  );
}

Font.register(
  {
    src: "https://dgspjhhkvivhccolkflh.supabase.co/storage/v1/object/public/pdfassets/MedicalReportGenAssets/TeeFranklinBook.ttf",
    family: "Tee Franklin Book"
  }
);

let styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#E4E4E4",
        fontFamily: "Tee Franklin Book",
        // fontWeight: "",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
});

ReactPDF.render(<MyDocument />, "./output.pdf");
