# JSON сервер

## ToDo React JSON Server

1. Данный сервер разврнут на glitch, можно использовать для работы:

<https://best-ordinary-airboat.glitch.me/todoData>

2. Для работы проекта можно запустить свой json server локально.

Для этого лучше запустить содержимое данной папки "server" в виде отдельного проекта (копируем, инсталируем, запускаем)

Например, копируем папки "server" в папку папки "todo_react_server" и далее в этой папке - делаем инициализацию:

```
npm init
```

далее установку и запуск:

### Установка json-server глобально в систему (если не был установлен ранее)

```
npm i -g json-server
```

### Установка json-server локально в данный проект:

```
npm i json-server
```

### Запуск json-server

```
npx json-server --watch data/data.json --port 8001
```

### Описание JSON сервер

<https://my-js.org/docs/cheatsheet/json-server/>

NpmJs:

<https://www.npmjs.com/package/json-server/>

---

## ToDo React JSON Server на на glitch

Деплой и запуск json-server на glitch:
<https://glitch.com/>

1. Login Github

2. New project

3. Import from GitHub: <https://github.com/IgorMan2005/todo_react_server.git>

Result: <https://best-ordinary-airboat.glitch.me/todoData>
