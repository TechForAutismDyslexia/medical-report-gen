import { Document } from '@react-pdf/renderer';

import Pages from './pages/pages';

export default function MyDocument() {
  return (
    <Document>
      <Pages.Page4 />
    </Document>
  );
}