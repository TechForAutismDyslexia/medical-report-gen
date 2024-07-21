import { StyleSheet } from "@react-pdf/renderer";




export default StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 40,
      },
      title: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      sectionTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
      },
      paragraph: {
        fontSize: 12,
        marginBottom: 10,
        //line space 
        lineHeight: 1.2,
        // word space
        letterSpacing: 1,
      },
      table: {
        display: 'flex',
        justifyContent: 'center',
        width: '50%',
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'black',
        marginBottom: 10,
      },
      tableRow: {
        flexDirection: 'row',
        justifyContent: 'center',
      },
      tableCell: {
        width: '70%',
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: 'black',
        padding: 2,
        fontSize: 12,
        textAlign: 'center',
      },
      tableHeader: {
        backgroundColor: '#f0f0f0',
        fontWeight: 'bold',
      },
      smallText: {
        fontSize: 10,
        marginTop: 5,
        marginBottom: 10,
      },
      chart: {
        width: '100%',
        height: 200,
        marginTop: 20,
      },
      boldUnderline: {
        fontWeight: "bold",
        textDecoration: "underline",
      },
      bold: {
        fontWeight: "extrabold",
      }
});
