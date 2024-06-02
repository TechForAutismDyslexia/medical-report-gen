import { Page, Text, View, Document } from "@react-pdf/renderer";
import { Form } from "./types";
import styles from "./documentStyle";

// Create Document Component
const MyDocument = ({form}: {form: Form}) => (
  <Document>
    <Page style={styles.container}>
      <View>
        <Text style={styles.heading}>Biographical Details</Text>
        <View style={styles.table}>
          {/* <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={styles.tableCol}>Field</Text>
            <Text style={styles.tableCol}>Value</Text>
          </View> */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Name:</Text>
            <Text style={styles.tableCol}>{form.name}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Date of Birth:</Text>
            <Text style={styles.tableCol}>{form.dob}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Date of Assessment:</Text>
            <Text style={styles.tableCol}>{form.dateOfAssessment}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Gender:</Text>
            <Text style={styles.tableCol}>{form.gender}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>School:</Text>
            <Text style={styles.tableCol}>{form.school}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Grade:</Text>
            <Text style={styles.tableCol}>{form.grade}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Parents:</Text>
            <Text style={styles.tableCol}>{form.parents}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Parent's Email:</Text>
            <Text style={styles.tableCol}>{form.parentsEmail}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCol}>Home Address:</Text>
            <Text style={styles.tableCol}>{form.homeAddress}</Text>
          </View>

          {/* Add the rest of the details */}
        </View>
      </View>
    </Page>
  </Document>
);

export default MyDocument;
