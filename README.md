# ToDo List React.JS

<https://igorman2005.github.io/todo_react_site/>

Git:

```
git remote add origin git@github.com:IgorMan2005/todo_react.git
git branch -M main
git push -u origin main
```

## Источники для ToDo List:

1. Локальный: /data/data.js  
   необходимо установить flag to use jsonServer (App.jsx): useJson = false;

2. Запуск локального JSON сервера: /server/server.js (работает на основе данных: /server/data/data.json)
   необходимо установить flag to use jsonServer (App.jsx): useJson = true;

   прописать локальный сервер в /data/jsonServer.js

3. Использование внешнего JSON сервера: <https://best-ordinary-airboat.glitch.me/todoData>

по умолчанию приложение работает в варианте п. 3 - Использование внешнего JSON сервера

## Запуск приложения:

1. После первоначальной загрузки из Git, сделать установку пакетов:

```
npm i
```

2. После первоначальной загрузки из Git, сделать запуск приложения:

```
npm run start
```

3. Проверить работу приложения, внести необходимые изменения:

- data.js или jsonServer.js + data.json,
- настроить флаг useJson в App.jsx (flag to use jsonServer: true / false)

4. Сделать сборку приложения:

```
npm run build
```

5. Открыть файл build/index.html и поправить пути к .js, .css, favicon.ico файлам чтобы они начинались с точка слэш "./" По умолчанию может быть слеш "/"

## Публикация проекта на GitHub Pages:

1. Собрать build проекта:

```
npm run build
```

2. Открыть файл build/index.html и поправить пути к .js, .css, favicon.ico файлам чтобы они начинались с точка слэш "./" По умолчанию может быть слеш "/"

3. Залить на GitHub Pages ( uploading an existing file)
   например:

** ToDo List React.JS WebSite **

<https://igorman2005.github.io/todo_react_site/>

<git@github.com:IgorMan2005/todo_react_site.git>

<https://github.com/IgorMan2005/todo_react_site.git>

---

#### ВебКадеми React info:

Сделано на основе материалов от Webcademy. Курс: <https://webcademy.ru/jscourse/>

В приложение добавлена функциональность расчёта счётчиков: осталось и сделано (!)

---

### Created by Best IT Pro

<https://best-itpro.ru/>
