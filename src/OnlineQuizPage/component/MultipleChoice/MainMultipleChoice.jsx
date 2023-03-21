import React from "react";
import MultipleChoice from "./MultipleChoice";
// let obj = {
//   status: true,
//   question_data: [
//     {
//       question_id: 31891,
//       operation: null,
//       question_text:
//         "When rounding off a number to the nearest ten, we find\u003cbr/\u003e the closest multiple of ten to the number.",
//       question_type: "True/False",
//       upload_file_name: "",
//       level: "level1",
//       choice_data: [
//         {
//           choice_id: 74931,
//           choices: "Yes",
//           correct: true,
//           choice_image: "",
//           solution:
//             "\u003cp class=uploaded_solution\u003eWhen rounding a number to nearest ten, we find the closest multiple of ten to the number. \u003cbr/\u003e\r\nThus, the given statement is correct.\u003c/p\u003e",
//           solution_image: "",
//           solution1: "",
//           solution1_image: "",
//           solution2: "",
//           solution2_image: "",
//         },
//         {
//           choice_id: 74932,
//           choices: "No",
//           correct: false,
//           choice_image: "",
//           solution: "",
//           solution_image: "",
//           solution1: "",
//           solution1_image: "",
//           solution2: "",
//           solution2_image: "",
//         },
//       ],
//       orc_oprc_data: [],
//       ol_data: [],
//     },
//   ],
//   tag_id: 1149,
//   live_class_id: 80032,
//   level: "level1",
//   live_class_practice_id: 34449,
//   quiz_completed: false,
//   question_no: 7,
//   message: "next question added",
// };
// let obj={
//   "status":true,
//   "question_data":[
//      {
//         "question_id":58596,
//         "operation":null,
//         "question_text":"The following pictograph shows the number of buses in different schools of a town.\u003cbr/\u003e\nHow many buses are there in school D?",
//         "question_type":"Multiple choice",
//         "upload_file_name":"https://d1ttopz56pc27j.cloudfront.net/old_questions/VI_MAT0902_Q1.png?Expires=1649850950\u0026Signature=D0mhKKHod3gyopzo7xLqT0gJL6vD~7BlozP2DveTowVMy1~DUo2ZaitqjNfXtys2keywNj3cdkA2A~tto~f6b~HzGoTkuNgG0QPeGjapbOfGEv-W8QD7CKv1fphATKDIdfeDWUrzGnn4e1EI73T4iYe7tA3iOEcbv4IWaLYV4doh3pIjgqBNNOi-ay3vgEFo7qx3D0Z~zv0cWTMbxR3Ok-jQX3e90D6s7uj9qtNXOREVT-Cb6D2pkg15THbTw9l8dQ1pNx9M6oezozgxQojSllHN~1cBu-QN0Ac8TYtyTM1EwUKvm-8acmqBfxXd5EdvpqJ0ZXh2nxF5N2~JwRka1Q__\u0026Key-Pair-Id=APKAICORD66RPKDMHT4Q",
//         "level":"level1",
//         "choice_data":[
//            {
//               "choice_id":137495,
//               "choices":"2",
//               "correct":false,
//               "choice_image":"",
//               "solution":null,
//               "solution_image":"",
//               "solution1":null,
//               "solution1_image":"",
//               "solution2":null,
//               "solution2_image":""
//            },
//            {
//               "choice_id":137496,
//               "choices":"5",
//               "correct":false,
//               "choice_image":"",
//               "solution":null,
//               "solution_image":"",
//               "solution1":null,
//               "solution1_image":"",
//               "solution2":null,
//               "solution2_image":""
//            },
//            {
//               "choice_id":137497,
//               "choices":"3",
//               "correct":false,
//               "choice_image":"",
//               "solution":null,
//               "solution_image":"",
//               "solution1":null,
//               "solution1_image":"",
//               "solution2":null,
//               "solution2_image":""
//            },
//            {
//               "choice_id":137498,
//               "choices":"4",
//               "correct":true,
//               "choice_image":"",
//               "solution":"\u003cp class=uploaded_solution\u003eFrom the given pictograph,\u003cbr/\u003e we can see that there are 4 buses in the row of school D.\u003cbr/\u003e\nTherefore, the number of buses in school D is 4.\u003cbr/\u003e\nSo, the option (d) is correct.\u003c/p\u003e",
//               "solution_image":"https://d1ttopz56pc27j.cloudfront.net/old_questions/VI_MAT0902_Q1_Sol.png?Expires=1649850950\u0026Signature=C9kEDg0KgvxeRnaFyXxjNhE9lmjI8fGGGbUkjISa1DAPr8GdBmYnSzb~57Uy-k~Qr4yyjhmbru70JTzZvsbUmEsMHd0YOEAROjbsKBV4LokhiM0ahhZeWba7rs0XLrelMYxY9mPrCdL~vX~jvfIArxbsbWu26X~o4Wp7x0KBdOXeTRaBGOTb1JXqJTW~Gcrr2On0C~6N7IHC3iqKbp8iK038fcJiJFfx~m-xF2JxSMpcvQTlsHbEnGrGitkkQ6EI84ngeM1oz3iV~7pb~lSxIoWKOlPd5YEUK3eclnxlYEn78P8zpTBmVwPOTLgqcVkdU1I-fVE8HgEtddHOBQ7bug__\u0026Key-Pair-Id=APKAICORD66RPKDMHT4Q",
//               "solution1":"",
//               "solution1_image":"",
//               "solution2":"",
//               "solution2_image":""
//            }
//         ],
//         "orc_oprc_data":[
           
//         ],
//         "ol_data":[
           
//         ]
//      }
//   ],
//   "tag_id":1559,
//   "live_class_id":80032,
//   "level":"level1",
//   "live_class_practice_id":34352,
//   "quiz_completed":false,
//   "question_no":9,
//   "message":"next question added"
// }
export default function MainMultipleChoice({obj,meter,choiceId}) {
  
  return <MultipleChoice state={obj?.question_data[0]} meter={meter} choiceId={choiceId}/>;
}
