import * as xlsx from 'xlsx';

let file = xlsx.readFile('/home/rohith/Documents/myProjects/medical-report-gen/src/assets/hemanth excel.xlsx');

let sheet_name_list = file.SheetNames;
let sheet = file.Sheets[file.SheetNames[0]];

console.log(sheet);
// console.log(xlsx.utils.sheet_to_json(sheet));