import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        padding: 10,
        border: '1 solid #ccc',
      },
      heading: {
        fontSize: 21,
        backgroundColor: '#d9d9d9',
        padding: 5,
        fontFamily: 'Helvetica-Bold',
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'ultrabold'
      },
      table: {
        width: 'auto',
        borderStyle: 'solid',
        borderColor: '#fff',
        borderWidth: 1,
        borderRightWidth: 0,
        borderBottomWidth: 0,
      },
      tableRow: {
        flexDirection: 'row',
      },
      tableCol: {
        flex: 1,
        borderStyle: 'solid',
        borderColor: '#fff',
        borderBottomWidth: 1,
        borderRightWidth: 1,
        padding: 5,
      },
      tableHeader: {
        backgroundColor: '#f0f0f0',
        fontFamily: 'Helvetica-Bold',
      },
  });

export default styles;