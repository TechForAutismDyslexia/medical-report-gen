import { View, Page, Text } from "@react-pdf/renderer";
import styles from "./style";

export default function SubtestResultsPage() {
  return (
    <Page style={styles.page}>
      <View style={styles.body}>
        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Information - fund of general knowledge; long-term memory; recall</Text>
          {"\n\n"}
          The Information subtest reflects two factors in the child's development of language and knowledge:
          1) The richness of the child's verbal environment during her development is reflected in the fund of knowledge.
          2) The ability to store that knowledge in long-term memory, recall it, and verbally express it is an individual ability that is measured by the Information subtest.
          <Text style={styles.boldUnderline}> On this subtest Sadhvi has scored Average level of Performance.</Text>
        </Text>

        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Comprehension - Understanding social rules and ethics; common sense and judgement</Text>
          {"\n\n"}
          The Comprehension subtest is based on social comprehension, a skill that is deficient in many LD and ADHD children. The social understanding that underlies the Comprehension subtest is greatly influenced by the environment. Ethical judgment may be lacking for a variety of reasons - intellectual, environmental, and emotional. For children with significantly weak comprehension subtest scores, direct instruction in social skills may be required.
          <Text style={styles.boldUnderline}> On this subtest Sadhvi has scored Average level of Performance.</Text>
        </Text>

        <Text style={styles.paragraph}>
          <Text style={styles.bold}>Arithmetic - Numerical reasoning; attention and concentration</Text>
          {"\n\n"}
          The numerical tasks of the Arithmetic subtest are worked out "in the child's head". She must have the ability to attend to the verbally presented problem and concentrate on working out the answer in her short-term memory. The Arithmetic subtest requires a level of freedom from distractibility that is considered a factor in overall intelligence. Performance on Arithmetic also requires a mastery of the mathematical operations required by each item, and therefore reveals information on the child's achievement in arithmetic learning.
          <Text style={styles.boldUnderline}> On this subtest Sadhvi has scored Low Average Level of performance.</Text>
        </Text>
      </View>
    </Page>
  );
}
