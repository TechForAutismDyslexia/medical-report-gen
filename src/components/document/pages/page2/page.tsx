import { View, Page, Text } from "@react-pdf/renderer";

import styles from "./style";


export default function MyPage() {
  return (
    <Page style={styles.page}>
      <View style={[styles.title,{marginBottom:"20px",marginTop:"20px"}]}>
        <Text style={styles.boldUnderline}>Test Findings</Text>
      </View>

      <Text style={[styles.sectionTitle,styles.boldUnderline , {marginBottom:"30px"}]}>I.Intellectual Assessment.</Text>
      <View >
        <Text style={styles.paragraph}>
          <Text >On MISIC, her verbal quotient is 94.2</Text> which suggests average level on
          verbal scale.
        </Text>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"center",width:"100%"}}>
        <View style={styles.table}>
          <View style={[styles.tableRow]}>
            <Text style={[styles.tableCell,styles.bold,{paddingBottom:"10px"}]}>Verbal Tests</Text>
            <Text style={[styles.tableCell,styles.bold,{paddingBottom: "10px",} ]}>Verbal Quotient</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Information</Text>
            <Text style={styles.tableCell}>100</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Comprehension</Text>
            <Text style={styles.tableCell}>104</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Arithmetic</Text>
            <Text style={styles.tableCell}>85</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Similarities</Text>
            <Text style={styles.tableCell}>89</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Digit Span</Text>
            <Text style={styles.tableCell}>93</Text>
          </View>
        </View> 
        </View>
        
        <Text style={styles.paragraph}>
          (The Average level of intelligence for the reference of above table is
          90 - 109; Borderline level of impairment is 70-79; Low average level
          of Intelligence is 80-89; High average level of intelligence is 110-
          119;superior level of intelligence is 120-129; superior level of
          intelligence is above 130).
        </Text>

        <View style={{width:"100%", height:"50%",backgroundColor:"rgba(0,0,0,0.1)",marginTop:"10px"}}>

        </View>
      </View>

    </Page>
  );
}
