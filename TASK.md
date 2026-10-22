# TS-02

Продолжаем знакомиться с **TypeScript**. На этот раз — через набор небольших упражнений на типизацию.

Задания взяты из открытого сборника [TypeScript Exercises](https://typescript-exercises.github.io/#exercise=1&file=%2Findex.ts).

## Что нужно сделать

В папке [`/tasks/`](./tasks/) лежат девять файлов — по одному упражнению в каждом:

| Файл | Тема |
| --- | --- |
| [`exercise-1.ts`](./tasks/exercise-1.ts) | Интерфейсы и типизация объектов |
| [`exercise-2.ts`](./tasks/exercise-2.ts) | Объединение типов (union) |
| [`exercise-3.ts`](./tasks/exercise-3.ts) | Сужение типов (narrowing) |
| [`exercise-4.ts`](./tasks/exercise-4.ts) | Type predicates |
| [`exercise-5.ts`](./tasks/exercise-5.ts) | Утилитарные типы (`Partial`) |
| [`exercise-6.ts`](./tasks/exercise-6.ts) | Дженерики и кортежи |
| [`exercise-7.ts`](./tasks/exercise-7.ts) | Пересечение типов (intersection) |
| [`exercise-8.ts`](./tasks/exercise-8.ts) | Дженерики в API-ответах |
| [`exercise-9.ts`](./tasks/exercise-9.ts) | Типизация класса и его методов |

В каждом файле в комментарии есть блоки **Intro** и **Exercise** с описанием задачи. В коде специально оставлены ошибки типов (`unknown`, неявный `any`, отсутствующие типы) — ваша задача их исправить.

**Цель:** после ваших правок команда проверки типов должна проходить без единой ошибки.

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

Установите зависимости (в проекте используется **TypeScript 7**):

```bash
npm install
```

## Проверка типов

```bash
npm run typecheck
```

Пока в проекте есть ошибки, команда выведет их список. После решения всех упражнений вывод должен быть пустым — это значит, что всё типизировано верно.

## После выполнения обязательно ОТДЕЛЬНЫМ коммитом добавьте фаил с выводом проверки

```bash
npm run typecheck > result.log
```

Затем закоммитьте `result.log` отдельным коммитом.

## Работа с репозиторием

- Ветка с заданием — `task/TS-02`.
- Создайте свою ветку от неё по шаблону `student/TS-02-{ВАША ФАМИЛИЯ ИО}` и делайте PR туда.

Подробнее про то, как мы работаем с репозиториями, — в [README.md](README.md).

## Ресурсы

- [TypeScript Exercises](https://typescript-exercises.github.io/#exercise=1&file=%2Findex.ts)
- [TypeScript: документация](https://www.typescriptlang.org/docs/)
- [Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
- [Narrowing](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [Generics](https://www.typescriptlang.org/docs/handbook/2/generics.html)
- [Utility Types](https://www.typescriptlang.org/docs/handbook/utility-types.html)
