# CAT-01

Мы начинаем разбираться с **асинхронным кодом и загрузкой данных**. 

Задача — взять **любой бесплатный публичный API**, загрузить оттуда данные и показать их на экране в виде **минимального интерфейса**. Просто вывести сырой JSON на экран — не считается 🙂

В качестве примера и шаблона можно взять **The Cat API** (фото котиков) — на практике мы разберём его вместе.

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

## Что нужно сделать

> В ветке `task/CAT-01-demo` лежит готовый шаблон просмотрщика котиков (фото + слайдер). Если берёте его за основу, зависимости уже описаны в `package.json` — просто установите их командой `npm install` и добавьте загрузку данных. Если делаете всё с нуля — выполняйте шаги ниже.

1. Инициализировать проект через npm:

   ```bash
   npm init
   ```

2. Установить `typescript` и `esbuild`:

   ```bash
   npm install --save-dev typescript esbuild
   ```

3. Инициализировать и настроить `tsconfig.json` (не забудьте про `rootDir`, `outDir` и режим модулей).

4. Добавить в `package.json` скрипты сборки и разработки. Собирать будем через **esbuild**:

   ```json
   {
     "scripts": {
       "build": "esbuild src/index.ts --bundle --outfile=dist/index.js --format=esm",
       "dev": "esbuild src/index.ts --bundle --outfile=dist/index.js --format=esm --watch",
       "typecheck": "tsc --noEmit"
     }
   }
   ```

5. Выбрать **любой бесплатный API** (список ресурсов — ниже). Не знаете, что взять, — берите The Cat API.

6. Загрузить данные асинхронно (`fetch` + `async/await`) и показать их в интерфейсе. Не выводите сырой JSON — соберите из данных хотя бы минимальный UI (карточку, список, фото, текст).

7. Стили — **mobile-first**, про десктопные размеры можно не думать.

8. Весь код пишем на **TypeScript**. Подход «как в React»: компонент — это функция, которая возвращает строку с HTML. В `index.html` уже есть `<div id="app">`, а `src/index.ts` рендерит в него `App()`.

9. Собрать проект через esbuild и проверить результат в браузере.

## Требования к структуре

```text
index.html
package.json
tsconfig.json
public/
  styles.css
src/
  index.ts
  App.ts
  shared/
    lib/
      components/
        types.ts
  widgets/
```

## Работа с репозиторием

- Если вы делаете своё приложение, PR нужно сделать в ветку `task/CAT-01`.
- Если вы хотите взять мой проект, берите ветку `task/CAT-01-demo` и делайте PR туда.

Подробнее про то, как мы работаем с репозиториями, — в [README.md](README.md).

## Ресурсы

- [The Cat API: примеры](https://docs.thecatapi.com/docs/examples/images)
- [Список публичных бесплатных API](https://github.com/public-apis/public-apis)
- [esbuild: документация](https://esbuild.github.io/)
- [TypeScript: документация](https://www.typescriptlang.org/docs/)
- [Асинхронность, промисы, async/await](https://learn.javascript.ru/async)
- [Fetch API](https://learn.javascript.ru/fetch)
