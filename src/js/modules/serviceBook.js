export const API_URL = "http://localhost:3024/";

export const getBooks = async (id) => {
  try {
    const response = await fetch(`${API_URL}api/books/${id ? id : ""}`);

    if (!response.ok) {
      throw new Error(`Ошибка при запросе книги с сервера: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export const getLabels = async () => {
  try {
    const response = await fetch(`${API_URL}api/label`);

    if (!response.ok) {
      throw new Error(`Ошибка при запросе label сервера: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

// Сервер CRM запущен. Вы можете использовать его по адресу http://localhost:3024
// Нажмите CTRL+C, чтобы остановить сервер
// Доступные методы:
// GET /api/books - получить список книг, в query параметр search можно передать поисковый запрос
// POST /api/books - создать объект книги, в теле запроса нужно передать объект {title: string, description: string, images?: base64, label: string }
// GET /api/books/{id} - получить книгу по ID
// DELETE /api/books/{id} - удалить книгу по ID
// GET /api/label - получить список лейблов
