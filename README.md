# Playwright UI Tests for AutomationExercise

Автоматизированные UI-тесты сайта https://automationexercise.com с использованием Playwright.

## Быстрый старт

### 1. Клонировать репозиторий

```
git clone https://github.com/mrcr0wley/playwright-automationexercise.git
cd playwright-automationexercise
```

### 2. Установить зависимости

```
npm install
```

### 3. Запустить тесты

```
npx playwright test
```

### 4.Просмотр отчёта

После запуска тестов сгенерируется HTML-отчёт. Чтобы открыть локально, выполни:

```
npx playwright show-report
```

### 5. CI/CD

Тесты автоматически запускаются через GitHub Actions при пуше в репозиторий.

### 6. Работа с Git

```
git add .
→ Добавляет все изменённые файлы в индекс (готовит к коммиту). Точка (.) означает «всё».

git commit -m "Краткое описание изменений"
→ Фиксирует изменения в локальном репозитории с комментарием.

git push
→ Отправляет изменения на удалённый репозиторий на GitHub.
```
