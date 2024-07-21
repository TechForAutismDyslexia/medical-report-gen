import { View, Page, Text, Image } from "@react-pdf/renderer";
import styles from "./style";

export default function MyPage() {
  return (
    <Page style={styles.page}>
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>
          Coding - Visual motor coordination; speed; concentration
        </Text>
        
        <Text style={styles.paragraph}>
          This is an interesting performance subtest that measures visual motor skill. Coding gives 
          clues to basic deficiencies in visual motor performance needed for writing. Good short-
          term memory improves performance on coding. It also factors with freedom from 
          distractibility and the ability to concentrate to accomplish a visual motor task within time 
          constraints.  <Text style={styles.boldUnderline}>On this subtest Sadhvi has scored Average level of Performance.</Text>
        </Text>

        <Text style={styles.sectionTitle}>
          Mazes- Mental Planning Skills
        </Text>

        <Text style={styles.paragraph}>
          Mazes show the ability of mental planning, insight and attention to instructions of the 
          child. It is a good measure of visuo-motor coordination with accuracy and speed.<Text style={styles.boldUnderline}> On 
          this subtest Sadhvi has scored Average level of performance.</Text>
        </Text>

        <Text style={styles.paragraph}>
          Overall Sadhvi Kolan full scale Intelligence quotient is 95.5 which is 
          <Text style={styles.boldUnderline}> average level of intelligence.</Text> However, her Performance abilities are better 
          compared to her Verbal abilities. Her performance quotient is 2.4 points 
          below than her verbal quotient. Which means specific learning disability. She 
          struggled with numerical reasoning skill, Long term memory, Conceptual 
          skills, Visual motor skills and Visual perceptual skills.
        </Text>

        <Text style={styles.sectionTitle}>MISIC profile score</Text>
        
        {/* You would need to implement the chart here. 
            This could be done using SVG or by importing an image */}
        <Image src="path_to_chart_image.png" style={styles.chart} />

      </View>
    </Page>
  );
}
