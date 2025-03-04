### Hexlet tests and linter status:
[![Actions Status](https://github.com/kobayskiy/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/kobayskiy/frontend-project-44/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/a4a24dfe5c943daea9c5/maintainability)](https://codeclimate.com/github/kobayskiy/frontend-project-44/maintainability)

# Brain games
«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново.

Игры:

- Определение четного числа.
- Калькулятор. Арифметические выражения, которые необходимо вычислить.
- Определение наибольшего общего делителя.
- Прогрессия. Поиск пропущенных чисел в последовательности чисел.
- Определение простого числа.

# Установка 
Для установки игр используйте команду:
```
make install
```

## Локальная установка пакета
Из директории проекта.
```
make publish
npm link
```
После установки игры можно запускать по имени.
## Пример
```
brain-calc
```

# Игра: "Проверка на чётность"
Суть игры: пользователю показывается случайное число. И ему нужно ответить yes, если число чётное, или no — если нечётное.
[![asciicast](https://asciinema.org/a/kEm7HZI9HFdm7xjNHIR6jCHU2.svg)](https://asciinema.org/a/kEm7HZI9HFdm7xjNHIR6jCHU2)

# Игра: "Калькулятор"
Суть игры: пользователю показывается случайное математическое выражение, например 35 + 16, которое нужно вычислить и записать правильный ответ.
[![asciicast](https://asciinema.org/a/2WpRMNFtWEhtCLNxesy6601eG.svg)](https://asciinema.org/a/2WpRMNFtWEhtCLNxesy6601eG)

# Игра "НОД"
Суть игры: пользователю показывается два случайных числа, например, 25 50. Пользователь должен вычислить и ввести наибольший общий делитель этих чисел.
[![asciicast](https://asciinema.org/a/DIkC6Ww3FNx81A2SXJQuvaEsa.svg)](https://asciinema.org/a/DIkC6Ww3FNx81A2SXJQuvaEsa)

# Игра "Арифметическая прогрессия"
Суть игры: пользователю показывается ряд чисел, образующий арифметическую прогрессию, случайное число в прогрессии заменяется двумя точками. Пользователь должен определить это число.
[![asciicast](https://asciinema.org/a/9wdBznAOxO8B65SXfBoZFzbzX.svg)](https://asciinema.org/a/9wdBznAOxO8B65SXfBoZFzbzX)

# Игра "Простое ли число?"
Суть игры: пользователю показывается случайное число. И ему нужно ответить yes, если число простое, или no — если нет.
[![asciicast](https://asciinema.org/a/gyOCOS8LSiU2GkHAxMhsWJHv0.svg)](https://asciinema.org/a/gyOCOS8LSiU2GkHAxMhsWJHv0)