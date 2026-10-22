/*
    task-timeAgo
    Напишите функцию formatTimeAgo(date), которая принимает Date (или timestamp)
    и возвращает "человеческое" описание времени относительно текущего момента.

    Правила:
    - меньше 1 минуты      -> "just now"
    - меньше 1 часа        -> "N minutes ago"  (например "5 minutes ago", "1 minute ago")
    - меньше 24 часов      -> "N hours ago"    (например "3 hours ago", "1 hour ago")
    - меньше 2 суток       -> "yesterday"
    - меньше 7 суток       -> "N days ago"     (например "3 days ago")
    - 7 суток и больше     -> "DD.MM.YYYY"     (например "12.10.2023")

    Подсказки:
    - разницу удобно считать в миллисекундах: Date.now() - date.getTime()
    - переведите миллисекунды в минуты/часы/дни и возьмите Math.floor
    - не забудьте про склонение: "1 minute ago", но "2 minutes ago"
    - для формата DD.MM.YYYY пригодятся getDate(), getMonth(), getFullYear()
*/

export const formatTimeAgo = (date) => {

}
