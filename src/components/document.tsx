import { Page, Text, View, Document } from "@react-pdf/renderer";
import { Form, WiscIndex } from "./types";
import styles from "./documentStyle";

const MyDocument = ({ form }: { form: Form }) => (
  <Document >
    <Page style={styles.container}>
      {/* <View style={styles.header}>
        <Image src={icon} style={styles.icon} />
        <Text style={styles.topHeading}>Autism Spectrum Disorder Diagnostic Assessment Report</Text>
      </View> */}
      <View style={styles.body}>
        <Text style={styles.heading}>Biographical Details</Text>
        <View style={styles.table}>
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
        </View>
        <View style={{ marginTop: 18 }}>
          <Text style={styles.heading}>WISC-V Test Results</Text>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              marginBottom: 5,
              textAlign: "center",
            }}
          >
            WISC-V Index Scores
          </Text>
          <Text style={{ marginBottom: 5, fontSize: 14, textAlign: "center" }}>
            Age at Testing: {form.ageOfAssessment}
          </Text>

          <WiscIndexTable wiscIndex={form["WISC Test Results"]} />
        </View>
      </View>
    </Page>
  </Document>
);

function WiscIndexTable({ wiscIndex }: { wiscIndex: WiscIndex[] }) {
  return (
    <View style={[styles.table, { fontSize: 15 }]}>
      <View style={[styles.tableRow, styles.tableHeader]}>
        <Text style={[styles.tableCol, { flex: 3, textAlign: "center" }]}>
          WISC-V Indexes
        </Text>
        <Text style={styles.tableCol}>Composite Score</Text>
        <Text style={styles.tableCol}>Percentile Rank</Text>
        <Text style={styles.tableCol}>95% Confidence Interval</Text>
        <Text style={styles.tableCol}>Qualitative Description</Text>
      </View>

      {wiscIndex.map(
        (result, index) =>
          index < 6 && (
            <View style={styles.tableRow} key={index}>
              <Text style={[styles.tableCol, { flex: 3 }]}>
                {result["WISC-V Indexes"]}
              </Text>
              <Text style={styles.tableCol}>{result["Composite Score"]}</Text>
              <Text style={styles.tableCol}>{result["Percentile Rank"]}</Text>
              <Text style={styles.tableCol}>
                {result["95% Confidence Interval"]}
              </Text>
              <Text style={styles.tableCol}>
                {result["Qualitative Description"]}
              </Text>
            </View>
          ),
      )}
    </View>
  );
}

export default MyDocument;
