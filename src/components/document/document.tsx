import { Document } from '@react-pdf/renderer';

import Pages from './pages/pages';

export default function MyDocument() {
  return (
    <Document>
      <Pages.Page1 />
      <Pages.Page2/>
      <Pages.Page3/>
    </Document>
  );
}