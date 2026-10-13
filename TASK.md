# CAT-01

Мы начинаем разбираться с **асинхронным кодом и загрузкой данных**. Курс у нас про мобильную разработку, дальше нас ждёт React Native, а пока потренируемся на вебе — сделаем мобильный интерфейс.

В этом задании мы делаем **статичный шаблон** приложения-просмотрщика котиков: фото и кнопка «Дальше». Саму загрузку данных мы добавим вместе на практике, здесь важна структура и вёрстка.

## Что нужно сделать

1. Инициализировать проект через npm:

   ```bash
   npm init
   ```

2. Установить `typescript` и `esbuild`:

   ```bash
   npm install --save-dev typescript esbuild
   ```

3. Инициализировать конфиг TypeScript:

   ```bash
   npx tsc --init
   ```

4. Настроить `tsconfig.json` под наш проект (не забудьте про `rootDir`, `outDir` и режим модулей).

5. Добавить в `package.json` скрипты сборки и разработки. Собирать будем через **esbuild**:

   ```json
   {
     "scripts": {
       "build": "esbuild src/index.ts --bundle --outfile=dist/index.js --format=esm",
       "dev": "esbuild src/index.ts --bundle --outfile=dist/index.js --format=esm --watch",
       "typecheck": "tsc --noEmit"
     }
   }
   ```

6. Сверстать мобильный интерфейс: **фото котика** и кнопка **«Дальше»**. Стили — **mobile-first**, про десктопные размеры можно не думать.

7. Пока данных нет, используйте картинку-заглушку `assets/cat.jpg`.

8. Весь код пишем на **TypeScript**. Подход «как в React»: компонент — это функция, которая возвращает строку с HTML. В `index.html` уже есть `<div id="app">`, а `src/index.ts` рендерит в него `App()`.

9. Собрать проект через esbuild и проверить результат в браузере.

> Загрузку данных из The Cat API мы сделаем вместе на практике. В этом задании `fetch` не нужен.

## Требования к структуре

```text
index.html
package.json
tsconfig.json
public/
  styles.css
assets/
  cat.jpg
src/
  index.ts
  App.ts
  shared/
    lib/
      components/
        types.ts
  widgets/
    CatViewer/
      CatViewer.ts
```

## Работа с репозиторием

- Если вы делаете своё приложение, PR нужно сделать в ветку `task/CAT-01`.
- Если вы хотите взять мой проект, берите ветку `task/CAT-01-demo` и делайте PR туда.

Подробнее про то, как мы работаем с репозиториями, — в [README.md](README.md).

## Ресурсы

- [The Cat API: примеры](https://docs.thecatapi.com/docs/examples/images)
- [esbuild: документация](https://esbuild.github.io/)
- [TypeScript: документация](https://www.typescriptlang.org/docs/)
- [Асинхронность, промисы, async/await](https://learn.javascript.ru/async)
- [Fetch API](https://learn.javascript.ru/fetch)
