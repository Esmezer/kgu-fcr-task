# DATE-01

Всем привет! Делаем фронтенд для мессенджера/соцсети. Нужно показывать время
сообщений "по-человечески", рисовать таймер до старта эфира и форматировать даты
для карточек. Потренируемся работать с датами в JavaScript.

## Задачи

Каждая задача лежит в отдельном файле в папке [`/tasks`](./tasks):

- [`tasks/timeAgo.js`](./tasks/timeAgo.js) — `formatTimeAgo(date)`: "5 minutes ago", "yesterday", "12.10.2023".
- [`tasks/countdown.js`](./tasks/countdown.js) — `getCountdown(futureDate)`: `{ days, hours, minutes, seconds }`.
- [`tasks/formatDate.js`](./tasks/formatDate.js) — `formatDate(date, formatString)`: шаблоны `YYYY`, `MM`, `DD`, `HH`, `mm`.

Для каждой задачи есть тесты в папке [`/__test__`](./__test__).
Все задачи будут прогоняться тестами.

## Требования к окружению

Версия ноды, которую я использую — **v24.21.0**.

Проверьте вашу версию:

```bash
node -v
```

Установите нужную версию:

```bash
nvm install 24.21.0
```

Можете попробовать на других версиях и рантаймах, но нет гарантии, что тесты будут работать корректно.

## Правила

- Используйте только встроенный объект `Date` и стандартные методы JavaScript.
- Никаких сторонних библиотек (moment, date-fns и т.п.).

## Запуск тестов

```bash
# Тесты по конкретной задаче
npm run test:timeago
npm run test:countdown
npm run test:format

# Все тесты
npm test
```

## После выполнения обязательно ОТДЕЛЬНЫМ коммитом добавьте файл с выводом тестов

```bash
node --test --test-reporter=tap > result.log
```
