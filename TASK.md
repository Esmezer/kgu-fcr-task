# TS-01

Помните, мы с вами делали анкету?

Возьмите этот код и добавьте в проект **TypeScript**!

## Что нужно сделать

1. Инициализировать проект через npm:

   ```bash
   npm init
   ```

2. Установить `typescript` с помощью npm:

   ```bash
   npm install --save-dev typescript
   ```

3. Инициализировать конфиг TypeScript:

   ```bash
   npx tsc --init
   ```

4. Настроить `tsconfig.json`. Найдите в интернете рекомендованный конфиг или попросите нейросеть сгенерировать его под наш проект (не забудьте про пути `src`, `outDir`, `rootDir` и режим модулей).

5. Перевести все компоненты в `.ts`.

6. Создать файл типов `shared/lib/components/types.ts`.

7. Описать в нём **дженерик-тип компонента** с опциональным `children`.

8. Типизировать всё, что можно: пропсы компонентов, параметры функций, возвращаемые значения.

9. Добавить в `package.json` скрипты для компиляции и разработки (сборка и dev-режим):

   ```json
   {
     "scripts": {
       "build": "tsc",
       "dev": "tsc --watch"
     }
   }
   ```

10. Скомпилировать TypeScript, заново подключить собранный JS к HTML и проверить результат в браузере.

## Требования к структуре

```text
src/
  pages/
  widgets/
  shared/
    lib/
      components/
        types.ts
  App.ts
  index.ts
```

## Работа с репозиторием

- Если вы переделываете свой проект, PR нужно сделать в ветку `task/TS-01`.
- Если вы хотите взять мой проект, берите ветку `task/TS-01-demo` и делайте PR туда.

Подробнее про то, как мы работаем с репозиториями, — в [README.md](README.md).

## Ресурсы

- [TypeScript: документация](https://www.typescriptlang.org/docs/)
- [TypeScript: tsconfig reference](https://www.typescriptlang.org/tsconfig)
- [Дженерики в TypeScript](https://www.typescriptlang.org/docs/handbook/2/generics.html)
