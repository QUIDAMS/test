const questions = [
  {
    checkedItems: new Map(), // [{checkbox-1: true, checkbox-2: false, ...}]
    text: 'Это вопрос.....?',
    answers: [
      // Map({checkbox-1: true, checkbox-2: false, ...})
      {label: 'Ответ 1 верный', name: 'checkbox-1', correct: true },
      // checkedItems.get(a.name) === a.correct
      {label: 'Ответ 2 верный', name: 'checkbox-2', correct: true},
      {label: 'Ответ 3', name: 'checkbox-3', correct: false},
      {label: 'Ответ 4', name: 'checkbox-4', correct: false},
    ],
    correct: false // если ответ пользователя совпал с ответом в системе, тогда correct будет true
  },
// {
//
//   checkedItems: new Map(),
//   text: 'Чем свойства отличаются от состояний?',
//   answers: [
//     {label: 'Свойства можно изменять, состояния нельзя', name: 'checkbox-1', correct: true },
//     {label: 'Свойства для работы со значениями, состояния для работы с функциями', name: 'checkbox-2', correct: true},
//     {label: 'Состояния для работы со значениями, свойства для работы с функциями', name: 'checkbox-3', correct: false},
//     {label: 'Состояния можно изменять, свойства нельзя', name: 'checkbox-4', correct: false},
//   ],
  // correctAnswer: ['Состояния можно изменять, свойства нельзя'],
  // selectedAnswer: ''
// },
//
// {
//   checkedItems: new Map(),
//   text: 'Где неправильно выведен компонент через рендер',
//   answers: ['</ Test>', '<Test >', '<Test />', '</Test>'],
//   correctAnswer: ['</ Test>', '<Test >', '</Test>'],
//   selectedAnswer: []
// },
// {checkedItems: new Map(), text: 'Сколько родительских элементов можно вывести одновременно?', answers: ['Не более 1', 'Не более 3', 'Не более 5', 'Не более 10', 'Неограниченное количество'], correctAnswer: 'Не более 1', selectedAnswer: ''},
// {checkedItems: new Map(), text: 'Какой метод отвечает за вывод информации?', answers: ['ReactDOM', 'render', 'react', 'renderer'], correctAnswer: 'render', selectedAnswer: ''},
// {checkedItems: new Map(), text: 'Какая компания разработала React JS?', answers: ['Twitter', 'GitHub', 'Facebook', 'Google'], correctAnswer: 'Facebook', selectedAnswer: ''},
// {checkedItems: new Map(), text: 'React JS это...', answers: ['фреймворк', 'JavaScript библиотека', 'MVC-фреймворк'], correctAnswer: 'JavaScript библиотека', selectedAnswer: ''},
// {checkedItems: new Map(), text: 'Где неправильно передена функция в качестве свойства?', answers: ['argument={this.someFunction ()}', 'argument={this.someFunction}', 'argument=(this.someFunction)', 'argument={someFunction}'], correctAnswer: ['argument={this.someFunction ()}', 'argument=(this.someFunction)', 'argument={someFunction}' ], selectedAnswer: []},

]

export default questions;
