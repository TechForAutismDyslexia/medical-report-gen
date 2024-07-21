import { View, Page, Text } from "@react-pdf/renderer";
import styles from "./style";

export default function MyPage() {
    return (
        <Page style={styles.page}>
            <View style={styles.body}>
                <Text style={styles.title}>Similarities - Verbal categories and concepts; abstract verbal reasoning</Text>
                <Text style={styles.paragraph}>In order to store language and information in long-term memory, humans use
                    a process  of  categorization  and  conceptualization  that  develops  from  the
                    concrete to the abstract. The Similarities subtest captures the child's ability
                    to  mentally  process  verbal  information,  categorizing  and  conceptualizing
                    information in  the  long-term  memory store. Over  the  course of the child's
                    development,  their  conceptual  skills  progress  from  concrete  to  abstract
                    reasoning, a  process that is reflected in  the  Similarities subtest.<Text style={styles.boldUnderline}> On  this
                        subtest Sadhvi has scored Low Average Level of Performance.</Text></Text>

                <Text style={styles.paragraph}>
                    Digit Span:
                    <Text>for digit span forwards, the child repeats numbers in the same order as
                        presented aloud by the examiner. For digit span backward, the child repeats the
                        numbers in reverse order of that presented by the examiner. It is included in an
                        assessment of the factor known as Freedom from Distractibility. An examiner may use
                        the Digit Span subtest to suggest a possible ADD/ADHD diagnosis, particularly if it
                        correlates with the other Freedom from Distractibility subtests - Arithmetic and Coding.
                        High Digit Span scores suggest a superior ability to concentrate and memorize orally
                        presented information. </Text>
                    <Text style={styles.boldUnderline}>On this subtest Sadhvi has scored Low Average level
                        of Performance.</Text>
                </Text>
                <Text style={styles.paragraph}><Text>Her performance quotient on the same test is 96.6</Text> which shows average range of
                    intelligence on performance scale.</Text>
                <View style={styles.tableContainer}>
                    <View style={styles.table}>
                        <View style={styles.tableRow}>
                            <View style={[styles.tableCol,styles.bold]}><Text style={styles.tableCell}>Performance Tests</Text></View>
                            <View style={[styles.tableCol,styles.bold]}><Text style={styles.tableCell}>Performance Quotient</Text></View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>Picture  Completion</Text></View>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>81</Text></View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>Block  Design</Text></View>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>111</Text></View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>Object  Assembly </Text></View>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>90</Text></View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>Coding</Text></View>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>106</Text></View>
                        </View>
                        <View style={styles.tableRow}>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>Mazes</Text></View>
                            <View style={styles.tableCol}><Text style={styles.tableCell}>95</Text></View>
                        </View>
                    </View>
                </View>
                <Text style={styles.paragraph}>(The  Borderline  level  of  impairment  for  the  reference  of  the  above  table
                    is  70-79;  Average  level  of  intelligence  is  90-109;  Extremely  low  (level  of
                    impairment) is 60 and below; Low average level of intelligence is 80-89; High
                    average level of intelligence is 110-119)

                </Text>
            </View>
        </Page>
    );
}