import { View, Page, Text } from "@react-pdf/renderer";
import styles from "./style";

export default function MyPage() {
    return (
        <Page style={styles.page}>
            <View>
                <View style={styles.graph}></View>
                <Text style={styles.sectionTitle}>Picture Completion - Visual discrimination; attention to visual detail</Text>

                <Text style={styles.paragraph}>
                    The skill reflected by the Picture Completion subtest is not visual acuity; it is visual
                    discrimination. The child must look at the visual whole presented and analyze its parts
                    to identify what is missing. A relatively simple task, poor performance in an LD child may
                    be related to visual-perceptual difficulties or environmental awareness.
                </Text>
                <Text style={styles.boldUnderline}> On this subtest Sadhvi has scored Low Average level of Performance.</Text>

                <Text style={styles.sectionTitle}>Block Design - Abstract visual-perceptual ability; spatial and nonverbal problem-solving</Text>

                <Text style={styles.paragraph}>
                    A pure test of perceptual intelligence, Block Design is the only perceptual subtest that
                    factors heavily with overall intelligence. Block Design will give you a good clue to innate
                    intellectual potential. However, Block Design is a visual-motor task and poor
                    performance may be developmental or related to a motor deficiency.
                </Text>
                <Text style={styles.boldUnderline}> On this subtest Sadhvi has scored Above Average level of performance.</Text>

                <Text style={styles.sectionTitle}>Object Assembly - Visual analysis and construction of a whole from its parts</Text>

                <Text style={styles.paragraph}>
                    The Object Assembly subtest score reflects the visual-motor skills of puzzle
                    construction. The child must its parts within time constraints.
                </Text>
                <Text style={styles.boldUnderline}> On this subtest Sadhvi has scored Average level of Performance.</Text>
            </View>
        </Page>
    );
}
