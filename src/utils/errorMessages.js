const defaultErrorMessagesByStatus = {
  401: "Неавторизован. Пожалуйста, войдите в профиль",
  403: "Доступ запрещён",
  404: "Ресурс не найден",
  500: "Ошибка сервера",
};
  

export function getErrorMessageByStatus(status, customMessages = {}) {
    return customMessages[status] || defaultErrorMessagesByStatus[status] || "Произошла ошибка";
  }
  