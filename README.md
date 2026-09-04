# Habitus - лендинг для приложений отслеживания привычек и товаров для здоровья на Angular 22

Современный адаптивный лендинг сверстанный по макету из Figma.

## 🌐 Demo
[![Vercel](https://img.shields.io/badge/Vercel-Live-brightgreen?style=flat-square&logo=vercel)](https://habitus-landing-page-angular.vercel.app)
[![Angular](https://img.shields.io/badge/Angular-22-DD0031?style=flat-square&logo=angular)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
![W3C-Validated](https://img.shields.io/badge/W3C-Validated-brightgreen?style=flat-square&logo=w3c)
[![Lighthouse Performance](https://img.shields.io/badge/Lighthouse-96+-brightgreen?style=flat-square&logo=lighthouse)](https://developer.chrome.com/docs/lighthouse)

👉 **[Посмотреть онлайн](https://habitus-landing-page-angular.vercel.app)**

## 🎨 Дизайн

**Автор:** [Olga](https://www.figma.com/@olgaaverchenko)  
**Макет:** [Habitus – Habit Tracker App Landing Page](https://www.figma.com/community/file/1507106587522840897/habitus-habit-tracker-app-landing-page)  
**Лицензия макета:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

## 💻 Разработка

**Разработчик:** [Hihiz](https://github.com/Hihiz)

## 🛠️ Технологический стек

### Frontend
- **Angular 22** - компонентный фреймворк (Standalone Components, Signals)
- **TypeScript 6.0** - строгая типизация
- **RxJS** - реактивное программирование

### Архитектура
- **Container-Presentational** (Smart/Dumb компоненты)
- **Signal** (`input()`)

## 📱 Адаптивность

| Устройство                      | Ширина  |
| ------------------------------- | ------- |
| 📱 Мобильные устройства(Mobile) | 375px+  |
| 📱 Планшеты(Tablet)             | 768px+  |
| 💻 Десктопы(Desktop)            | 1024px+ |
| 🖥️ Крупные экраны(Large)        | 1280px+ |

## ✨ Возможности

- Полностью адаптивный дизайн (Mobile-first)
- Гамбургер-меню с анимацией
- Аккордеон для часто задаваемых вопросов
- Слайдер со скриншотами приложения
- SEO-оптимизация
- Оптимизированные шрифты в формате WOFF2

## ⚡ Производительность

![Lighthouse Performance](https://img.shields.io/badge/Performance-95%2B-brightgreen?style=flat-square)
![Lighthouse Accessibility](https://img.shields.io/badge/Accessibility-95%2B-brightgreen?style=flat-square)
![Lighthouse Best Practices](https://img.shields.io/badge/Best%20Practices-95%2B-brightgreen?style=flat-square)
![Lighthouse SEO](https://img.shields.io/badge/SEO-95%2B-brightgreen?style=flat-square)

- Ленивая загрузка (lazy loading) для изображений

### Lighthouse скриншот

![](/screenshots/lighthouse.png)

## 📖 Доступность(Accessibility)

- Семантическая HTML-разметка (`<article>`, `<section>`)
- Навигация с клавиатуры (Tab, Enter, Space)
- ARIA-атрибуты (`aria-label`, `aria-expanded`, `aria-live`)
- `alt` атрибуты для всех изображений=
- Поддержка экранных читалок (скринридеров)

## 📂 Структура проекта

```
habitus-landing-page-angular/
├── src/
│   ├── app/
│   │   ├── features/              # Feature-компоненты
│   │   │   └── home/              # Главная страница (Smart)
│   │   │      ├── page/          # HomePageComponent
│   │   │      ├── components/    # Dumb компоненты секций
│   │   │      │   ├── hero-section/
│   │   │      │   ├── pricing-section/
│   │   │      │   │   └── pricing-card/  # Dumb с input
│   │   │      │   └── testimonials-section/
│   │   │      │       └── testimonial-card/     # Dumb с input
│   │   │      └── models/        # Типы для home feature
│   │   └── shared/                # Общие, переиспользуемые компоненты
│   │       ├── components/        # Header, Footer
│   │       └──  models/            # Общие типы
│   ├── index.html                 # SEO
│   ├── main.ts
│   ├── styles.scss                # Глобальные стили
├── public/                        # Статические ресурсы
│   ├── img/
│   ├── fonts/
│   ├── robots.txt
│   └── sitemap.xml
├── vercel.json                    # Vercel деплой конфиг
├── tsconfig.json
├── angular.json
└── package.json
```

## 🏃 Запуск локально

### Требования
- Node.js
- npm - менеджер пакетов

### Установка и запуск
### 1. Клонировать репозиторий
```
git clone https://github.com/Hihiz/habitus-landing-page-angular.git
cd habitus-landing-page-angular
```

### 2. Установить пакеты
Установить все пакеты из файла `package.json`:
```
npm install
```

### 3. Запустить локальный сервер для разработки
```
npm start
```

### 4. Открыть в браузере
`http://localhost:4200/`

## 📸 Скриншоты

### Desktop (1440px)

![](/screenshots/desktop1440.png)

### Tablet (768px)

![](/screenshots/tablet768.png)

### Mobile (375px)

![](/screenshots/mobile375.png)

## 📄 Лицензия

**Автор дизайна:** [Olga](https://www.figma.com/@olgaaverchenko)  
**Макет:** [Habitus – Habit Tracker App Landing Page](https://www.figma.com/community/file/1507106587522840897/habitus-habit-tracker-app-landing-page)  
**Лицензия:** [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)

Полный текст лицензии [LICENSE](https://github.com/Hihiz/habitus-landing-page-angular/blob/main/LICENSE)
