module.exports = {
  contacts: `Бот №1 по поиску SMM исполнителей. 🔥
Рассказываем тренды рынка SMM (Instagram, VK, Facebook)
Занимаемся изучением SMM рынка в СНГ уже 2 год
Эксперт, основатель: @bodison`/n
Свои предложения по поводу пишите на почту (с указанием Названия бота) telegramaxe@gmail.com`,
    bro: `Чтобы поделиться с друзьями ботом сейчас, отправьте им ссылку: https://t-do.ru/startuphelperbot \nСпасибо! 😱😏\n`,
  description: `Здравствуйте! Этот бот поможет найти Вам получить кардинальный результат в SMM.\n
Для Вашего удобства бот понимает следующие команды:
/start - начало работы
/help - список команд
/cart - корзина
/ads - Реклама 🔥
/packaging - Упаковка ☄️
/content - Контент 💥
/reasons - фильтр услуг
/contacts - контакты, о нас.\n\n

Надеемся, Вам понравится использование этого бота!`,
  logStart() {
    console.log('Bot has been started...')
  },
  getChatId(msg) {
    return msg.chat.id
  }
}
