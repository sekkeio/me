// Взял код из совета Бюро: https://bureau.ru/soviet/20240606/ (если кому-то интересно вдруг)

const QUOTATION_MARKS = '"\'«»‘’‚‛“”„‟‹›'
const PUNCTUATION_MARKS = '.!?:;,'

const surroundedByQuotationMarks = new RegExp(`^([${QUOTATION_MARKS}]{1})(.*)([${QUOTATION_MARKS}]{1}[${PUNCTUATION_MARKS}]?)$`)

Array.from(document.querySelectorAll('a'))
  .filter(a => surroundedByQuotationMarks.test(a.textContent))
  .forEach(a => a.innerHTML = a.innerHTML.replace(surroundedByQuotationMarks, '$1<u>$2</u>$3'))