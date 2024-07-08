### ДЗ1

1. создать публичный репозиторий на гитхаб
2. создать ветку с названием lecture-2-hw
3. создать проект (с помощью vite) и поставить зависимости
4. почистить проект
5. скопировать к себе моковые данные из этого проекта (materials/mock.js)
6. Отобразить все рестораны из моковых данных. Отображаем рестораны друг за другом. Логику отрисовку массивов не используем, отображаем каждый ресторан отдельно. Цель отработать работу с элементами.
    1. Название ресторана
    2. Заголовок - Меню (h3)
    3. Список названий блюд (используем тег ul и li)
    4. Заголовок - Отзывы (h3)
    5. Список текстов отзывов (используем тег ul и li)
7. сделать коммит и запушить
8. открыть ПР из ветки с дз в основную ветку
9. отправить ссылку на ПР в ветку ДЗ1 discord

### ДЗ2

**обязательная часть**

1. необходимо в блюдо добавить счетчик. Минимальное значение 0, максимальное 5, по умолчанию 0. Кнопки +-
2. добавить условный рендеринг, где могут отсутствовать данные
3. добавить компоненты хедера, футера и обернуть приложение

**дополнительная часть**
Реализовать табы - кнопки с названием ресторана, по одной на каждый ресторан

- Кнопки отображаем между хедером и рестораном
- Единовременно отображаем только 1 ресторан
- По умолчанию - отображаем первый
- По клику на кнопку отображаем соответствующий ей ресторан. При повторном клике на активную кнопку ничего не происходит.

### ДЗ3

**расширения для IDE**

- установить расширения eslint и prettier (для vscode скидывал в дискорд)
- eslint будет подсвечивать ошибки по коду, например, именования хуков, неправильные масивы зависимостей и тд
- prettier будет ставить одинаковые отступы, кавычки и тд. Удобно настроить автоматический прогон на сохранение файла

**обязательная часть**

- сделать форму отзыва: имя, текст, рейтинг (от 1 до 5)
- по клику на “сохранить” форма сбрасывается
- форма рисуется после всех отзывов о ресторане
- данные не сохраняем, просто отображение
- переиспользовать счетчик между блюдом и отзывом
- использовать необходимые хуки

**дополнительная часть**
Размножить активный ресторан, чтобы на странице появился длинный скролл и сделать "скролл прогресс". Демо тут - https://www.cssscript.com/demo/scroll-progress-bar/

### ДЗ4

- стилизовать приложение, используя css модули (в свободном формате, на ваше усмотрение). Еще раз подумать над разбивкой UI по отдельным компонентам (ресторан, меню, блюдо, отзыв и тд)
- для удобства предлагается использовать библиотеку classnames, чтобы подключать условно несколько классов - https://www.npmjs.com/package/classnames
- подключить корневой ccs файл, чтобы почистить ненужные стили