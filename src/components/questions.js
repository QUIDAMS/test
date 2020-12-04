const questions = [
  {
    checkedItems: new Map(), // [{checkbox-1: true, checkbox-2: false, ...}]
    text: 'Чем свойства отличаются от состояний?(один вариант ответа)',
    answers: [
      {label: 'Состояния можно изменять, свойства нельзя', name: 'checkbox-1', correct: true },
      {label: 'Свойства можно изменять, состояния нельзя', name: 'checkbox-2', correct: false},
      {label: 'Свойства для работы со значениями, состояния для работы с функциями', name: 'checkbox-3', correct: false},
      {label: 'Состояния для работы со значениями, свойства для работы с функциями', name: 'checkbox-4', correct: false},
    ],
    correct: false, // если ответ пользователя совпал с ответом в системе, тогда correct будет true
  },
  {
    checkedItems: new Map(), // [{checkbox-1: true, checkbox-2: false, ...}]
    text: 'Какие компании не участвовали в разработке  React JS?(несколько вариантов ответа)',
    answers: [
      {label: 'Twitter', name: 'checkbox-1', correct: true },
      {label: 'Google', name: 'checkbox-2', correct: true},
      {label: 'Facebook', name: 'checkbox-3', correct: false},
      {label: 'GitHub', name: 'checkbox-4', correct: true},
    ],
    correct: false, // если ответ пользователя совпал с ответом в системе, тогда correct будет true
  },
  {
    checkedItems: new Map(), // [{checkbox-1: true, checkbox-2: false, ...}]
    text: 'Куда можно встроить готовый код из метода render()(oдин вариант ответа)?',
    answers: [
      {label: 'Только в div', name: 'checkbox-1', correct: false },
      {label: 'Только в тег, у которого есть id', name: 'checkbox-2', correct: false},
      {label: 'В div или же в span', name: 'checkbox-3', correct: false},
      {label: 'В любой тег', name: 'checkbox-4', correct: true},
    ],
    correct: false, // если ответ пользователя совпал с ответом в системе, тогда correct будет true
  },
  {
    checkedItems: new Map(), // [{checkbox-1: true, checkbox-2: false, ...}]
    text: 'Где неправильно выведен компонент через рендер?(несколько вариантов ответа)',
    answers: [
      {label: '</ Test>', name: 'checkbox-1', correct: true },
      {label: '<Test >', name: 'checkbox-2', correct: true},
      {label: '<Test />', name: 'checkbox-3', correct: false},
      {label: '</Test>', name: 'checkbox-4', correct: true},
    ],
    correct: false, // если ответ пользователя совпал с ответом в системе, тогда correct будет true
  },
  {
    checkedItems: new Map(), // [{checkbox-1: true, checkbox-2: false, ...}]
    text: 'React JS это...(один вариант ответа)',
    answers: [
      {label: 'MVC-фреймворк', name: 'checkbox-1', correct: false },
      {label: 'фреймворк', name: 'checkbox-2', correct: false},
      {label: 'JavaScript библиотека', name: 'checkbox-3', correct: true},
    ],
    correct: false, // если ответ пользователя совпал с ответом в системе, тогда correct будет true
  },
]

export default questions;
