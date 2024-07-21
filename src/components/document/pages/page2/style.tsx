import { StyleSheet, Font } from "@react-pdf/renderer";

Font.register({
    family: "Noto Sans",
    fonts: [
      {
        src: "https://dgspjhhkvivhccolkflh.supabase.co/storage/v1/object/public/pdfassets/MedicalReportGenAssets/noto-sans.regular.ttf",
        fontStyle: "normal",
        fontWeight: "normal",
      },
      {
        src: "https://dgspjhhkvivhccolkflh.supabase.co/storage/v1/object/public/pdfassets/MedicalReportGenAssets/noto-sans.bold.ttf",
        fontStyle: "normal",
        fontWeight: "bold",
      }
    ]
  });



export default StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 40,
        fontFamily: 'Noto Sans'
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
        // borderBottomWidth: 2,
        // borderWidth: 2,
        borderTopWidth: 1,
        borderLeftWidth: 1,
      
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
        borderBottomWidth: 1,
        borderRightWidth: 1,
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
        fontWeight: "bold",
      }
});
