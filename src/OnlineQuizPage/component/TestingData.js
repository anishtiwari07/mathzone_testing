export default function jsonDataTesting() {
  let obj = {
    status: true,
    question_data: [
      {
        question_id: 31955,
        operation: "addition",
        question_text: "",
        question_type: "Fill in the blanks",
        upload_file_name:
          "https://s3.ap-south-1.amazonaws.com/begalileo-assets/BaseTenBlocks/Green-Hundred.png",
        level: "level3",
        fib_text: "",
        fib_before_text:
          "The value of (25 - 8 ) + (51 + 48) estimated to the nearest 10 is",
        after_question_text: null,
        choice_data: [
          {
            choice_id: 75141,
            choices: "&gt",
            correct: null,
            choice_image: "",
            solution:
              "25 is rounded as 30. \u003cbr/\u003e\n8 is rounded as 10. \u003cbr/\u003e\n51 is rounded as 50. \u003cbr/\u003e\n48 is rounded as 50. \u003cbr/\u003e\nThus, (25 - 8) + (51 + 48) is rounded as (30 - 10) + (50 + 50) = 120",
            solution_image: "",
            solution1: "",
            solution1_image: "",
            solution2: "",
            solution2_image: "",
          },
        ],
        orc_oprc_data: [],
        ol_data: [],
      },
    ],
    tag_id: 1150,
    live_class_id: 80032,
    level: "level3",
    live_class_practice_id: 34440,
    quiz_completed: false,
    question_no: 5,
    message: "next question added",
  };
  let obj2 = {
    operation: "addition",
    type: "options_multiple_pictures",
    questionName:
      'Evaluate <span class="mq-selectable">$\\left[\\frac{27}{4}-\\left(\\frac{5}{4}+(89-82)\\right)\\right]$</span> and select the correct answer.\n',
    row: 1,
    col: 4,
    questionContent: [
      [
        {
          row: 1,
          col: 1,
          value: '<span class="mq-selectable">$\\frac{5}{3}$</span> ',
          selected: "false",
        },
        {
          row: 1,
          col: 2,
          value: '<span class="mq-selectable">$\\frac{-3}{2}$</span> ',
          selected: "false",
        },
        {
          row: 1,
          col: 3,
          value: '<span class="mq-selectable">$\\frac{-4}{5}$</span> ',
          selected: "true",
        },
        {
          row: 1,
          col: 4,
          value: '<span class="mq-selectable">$\\frac{-13}{12}$</span> ',
          selected: "false",
        },
      ],
    ],
    solution: {
      model: [
        { val: "Applying BODMAS rule:" },
        {
          val: '<span class="mq-selectable">$\\left[\\frac{27}{4}-\\left(\\frac{5}{4}+(89-82)\\right)\\right]$</span> ',
        },
        {
          val: '<span class="mq-selectable">$=\\frac{27}{4}-\\left(\\frac{5}{4}+7\\right)$</span> ',
        },
        {
          val: '<span class="mq-selectable">$=\\frac{27}{4}-\\left(\\frac{5+28}{4}\\right)$</span> ',
        },
        {
          val: '<span class="mq-selectable">$=\\frac{27}{4}-\\frac{33}{4}$</span> ',
        },
        { val: '<span class="mq-selectable">$=\\frac{-6}{4}$</span> ' },
        { val: '<span class="mq-selectable">$=\\frac{-3}{2}$</span> ' },
      ],
      sidebyside: [],
      srows: null,
      scols: null,
    },
    answer: "true",
  };
  obj.question_data[0].question_type = obj2?.type;
  obj.question_data[0].question_text = JSON.stringify(obj2);
  return { ...obj };
}
