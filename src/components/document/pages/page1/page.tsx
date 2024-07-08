import { View, Page, Text } from "@react-pdf/renderer";

import styles from "./style";
import style from "./style";

export default function MyPage() {
  return (
    <Page style={styles.page}>
      <View style={style.body}>
      <Text style={styles.title}>Intellectual and Educational Assessment Report.</Text>
      
      <View style={styles.infoGrid}>
        <Text style={styles.infoItem}><Text style={styles.bold}>Name:</Text> Sadhvi Kolan</Text>
        <Text style={styles.infoItem}><Text style={styles.bold}>Gender:</Text> Female</Text>
        <Text style={styles.infoItem}><Text style={styles.bold}>Date of Testing:</Text> 5th June 2024</Text>
        <Text style={styles.infoItem}><Text style={styles.bold}>Class:</Text> 6th</Text>
        <Text style={styles.infoItem}><Text style={styles.bold}>Date of Birth:</Text> 1st April 2013</Text>
        <Text style={styles.infoItem}><Text style={styles.bold}>Informant:</Text> Parents</Text>
      </View>
      
      <Text style={styles.paragraph}>
        Sadhvi Kolan, 11 years 2 months old male child was referred by school for
        intellectual and educational assessment. She is studying 6th standard, in
        Glendale Academy International School. This assessment was done with the
        purpose of evaluating her current level and to develop effective intervention
        program for the child.
      </Text>
      
      <Text style={styles.sectionTitle}>Background Data and Observations</Text>
      
      <Text style={styles.paragraph}>
        Sadhvi's prenatal and postnatal history indicates that her mother conceived
        spontaneously. During the pregnancy, the mother experienced frequent vomiting.
        Sadhvi was delivered at full term via an elective caesarean section. Her birth cry and
        birth weight were normal. After birth, Sadhvi received phototherapy for 5 to 6 days due
        to neonatal jaundice.
      </Text>
      
      <Text style={styles.paragraph}>
        According to her mother, Sadhvi is facing issues with reading and spelling, and she also
        has anger issues.
      </Text>
      
      <Text style={styles.sectionTitle}>Tests Administered</Text>
      
      <Text style={styles.paragraph}>
        In order to assess her intellectual performance following test was
        administered:
      </Text>
      
      <View style={styles.list}>
        <Text style={styles.listItem}>• <Text style={styles.boldUnderline}>Malin's Intelligence Scale for Indian Children (MISIC)</Text></Text>
        <Text style={styles.listItem}>• <Text style={styles.boldUnderline}>Educational Assessment</Text></Text>
        <View style={[styles.list, { marginLeft: 20 }]}>
          <Text style={styles.listItem}>1. Sattler's Informal Writing Assessment</Text>
          <Text style={styles.listItem}>2. Schonell's Reading test</Text>
          <Text style={styles.listItem}>3. Schonell's Spelling Test</Text>
          <Text style={styles.listItem}>4. NIMHANS SLD index- Arithmetic test</Text>
        </View>
      </View>
      </View>
    </Page>
  );
} 
