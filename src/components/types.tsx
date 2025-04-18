class ReportData {
  Name: string;
  Gender: string;
  Date_of_Testing: Date;
  Class: string;
  Date_of_Birth: Date;
  Years: number;
  Month: number;
  Informant: string;
  Age: string;
  School_Name: string;
  Tests_Administered: string;
  Other_Test: string;
  Verbal_quotient: number;
  suggests: string;
  Information: number;
  Information_Level: string;
  Comprehension: number;
  Comprehension_Level: string;
  Arithmetic: number;
  Arithmetic_Level: string;
  Similarities: number;
  Similarities_Level: string;
  Digit_Span: number;
  Digit_Span_Level: string;
  performance_quotient: number;
  performance_quotient_Level: string;
  Picture_Completion: number;
  Picture_Completion_Level: string;
  Block_Design: number;
  Block_Design_Level: string;
  Object_Assembly: number;
  Object_Assembly_Level: string;
  Coding: number;
  Coding_Level: string;
  Mazes: number;
  Mazes_Level: string;
  Overall_Quotient: number;
  Overall_Level: string;
  Points: number;
  reading_age: string;
  below_than: string;
  Spelling_age: string;
  below_than1: string;
  Summery: string;
  Final_Level: string;
  Recomodations: string;
  Recomodations_2: string;
  Recomodations_3: string;

  constructor(data: any) {
    this.Name = data['Name'] || '';
    this.Gender = data['Gender'] || '';
    this.Date_of_Testing = new Date(data['Date of Testing']) || 0;
    this.Class = data['Class'] || '';
    this.Date_of_Birth = new Date(data['Date of Birth']) || 0;
    this.Years = data['Years'] || 0;
    this.Month = data['Month'] || 0;
    this.Informant = data['Informant'] || '';
    this.Age = data['Age'] || '';
    this.School_Name = data['School Name'] || '';
    this.Tests_Administered = data['Tests Administered'] || '';
    this.Other_Test = data['Other Test'] || '';
    this.Verbal_quotient = data['Verbal quotient'] || 0;
    this.suggests = data['suggests'] || '';
    this.Information = data['Information'] || 0;
    this.Information_Level = data['Information Level'] || '';
    this.Comprehension = data['Comprehension'] || 0;
    this.Comprehension_Level = data['Comprehension Level'] || '';
    this.Arithmetic = data['Arithmetic'] || 0;
    this.Arithmetic_Level = data['Arithmetic Level'] || '';
    this.Similarities = data['Similarities'] || 0;
    this.Similarities_Level = data['Similarities Level'] || '';
    this.Digit_Span = data['Digit Span'] || 0;
    this.Digit_Span_Level = data['Digit Span Level'] || '';
    this.performance_quotient = data['performance quotient'] || 0;
    this.performance_quotient_Level = data['performance quotient Level'] || '';
    this.Picture_Completion = data['Picture Completion'] || 0;
    this.Picture_Completion_Level = data['Picture Completion Level'] || '';
    this.Block_Design = data['Block Design'] || 0;
    this.Block_Design_Level = data['Block Design Level'] || '';
    this.Object_Assembly = data['Object Assembly'] || 0;
    this.Object_Assembly_Level = data['Object Assembly Level'] || '';
    this.Coding = data['Coding'] || 0;
    this.Coding_Level = data['Coding Level'] || '';
    this.Mazes = data['Mazes'] || 0;
    this.Mazes_Level = data['Mazes Level'] || '';
    this.Overall_Quotient = data['Overall Quotient'] || 0;
    this.Overall_Level = data['Overall Level'] || '';
    this.Points = data['Points'] || 0;
    this.reading_age = data['reading age'] || '';
    this.below_than = data['below than'] || '';
    this.Spelling_age = data['Spelling age'] || '';
    this.below_than1 = data['below than_1'] || '';
    this.Summery = data['Summery'] || '';
    this.Final_Level = data['Final Level'] || '';
    this.Recomodations = data['Recomodations'] || '';
    this.Recomodations_2 = data['Recomodations 2'] || '';
    this.Recomodations_3 = data['Recomodations 3'] || '';
  }
}


export {ReportData};