/*      JavaScript GradeEvaluator

      Author: M. Liliana Ignat
      Date: 7/7/2017 

      Filename: script.js
*/
 "use strict"; //interpret contents in JavaScript strict mode 
 var TPercent = 0;
 var grade = "";
function calc()
{

	var percent1 = convert(document.GradeCalc.Percent1.value);
	var percent2 = convert(document.GradeCalc.Percent2.value);
	var percent3 = convert(document.GradeCalc.Percent3.value);
	var percent4 = convert(document.GradeCalc.Percent4.value);
	var percent5 = convert(document.GradeCalc.Percent5.value);

	TPercent = percent1 + percent2 + percent3 + percent4 + percent5;

	//document.GradeCalc.TotalPercent.value = TPercent;

	var g1 = convert(document.GradeCalc.Grade1.value);
	var g2 = convert(document.GradeCalc.Grade2.value);
	var g3 = convert(document.GradeCalc.Grade3.value);
	var g4 = convert(document.GradeCalc.Grade4.value);
	var g5 = convert(document.GradeCalc.Grade5.value);

	var FinalGrade = ((g1 * percent1 / 100) + (g2 * percent2 / 100) + (g3 * percent3 / 100) + (g4 * percent4 / 100) + (g5 * percent5 / 100)) * 100 / TPercent;

	document.GradeCalc.Grade.value = FinalGrade;
	if (FinalGrade >= 90) {
            grade = 'A';
        } else if (FinalGrade >= 80) {
            grade = 'B';
        } else if (FinalGrade >= 70) {
            grade = 'C';
        } else if (FinalGrade >= 60) {
            grade = 'D';
        } else {
            grade = 'F';
        }
	document.GradeCalc.TotalPercent.value = grade;
}

function convert(input)
{
	if (input == "")
		return 0;
	else
		return parseFloat(input);	
}

