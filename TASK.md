# HC-01. CSS-переменные и тёмная тема

Лабораторная работа. Только HTML и CSS — **JavaScript использовать нельзя**.

## Цель

Научиться:

- объявлять CSS-переменные (custom properties) и хранить в них цвета;
- переключать тему через селекторы, реагируя на `:checked`.

## Что дано

`index.html` и `style.css` уже готовы: свёрстаны переключатель темы и три кастомных чекбокса. Но все цвета в `style.css` захардкожены под светлую тему, а тёмной темы нет.

Вам нужно вынести цвета в переменные и добавить тёмную тему.

## Палитра


| Переменная  | Светлая тема                         | Тёмная тема                      |
| ----------- | ------------------------------------ | -------------------------------- |
| `--bg`      | `#eef1f7`                            | `#0f1219`                        |
| `--surface` | `#ffffff`                            | `#171b25`                        |
| `--text`    | `#1b1f2a`                            | `#eef1f7`                        |
| `--muted`   | `#5b6473`                            | `#9aa3b2`                        |
| `--accent`  | `#4f6ef7`                            | `#7c93ff`                        |
| `--border`  | `#d7dce6`                            | `#2a3040`                        |
| `--shadow`  | `0 12px 32px rgba(20, 30, 60, 0.12)` | `0 12px 32px rgba(0, 0, 0, 0.5)` |


## Шаги

### 1. Объявите переменные светлой темы

В `style.css` создайте блок `:root` и объявите в нём переменные из левой колонки таблицы.

### 2. Добавьте тёмную тему

Когда чекбокс `#theme` отмечен, переопределите те же переменные значениями из правой колонки:

### 3. Примените переменные

Замените в `style.css` все цвета темы на `var(--имя)`. Например:

```css
/* было */
background: #eef1f7;
/* стало */
background: var(--bg);
```

## Ресурсы

- [Презентации](https://drive.google.com/drive/folders/1dQFBPJ4BL9fk2z7Z02mZG_nGh5jGCPN0?usp=sharing)
- [https://doka.guide/css/custom-properties/](https://doka.guide/css/custom-properties/)
- [https://doka.guide/css/checked/](https://doka.guide/css/checked/)
- [https://learn.javascript.ru/css-selectors](https://learn.javascript.ru/css-selectors)