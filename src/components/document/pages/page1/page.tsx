import { View, Page, Text } from "@react-pdf/renderer";

import styles from "./style";

export default function MyPage() {
  return (
    <Page style={styles.page}>
      <View style={styles.body}>
        <View style={styles.heading}>
        <Text>Intellectual and Educational Assessment Report</Text>
      </View>
      </View>
    </Page>
  );
}
