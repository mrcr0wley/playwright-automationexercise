# Playwright UI Tests for AutomationExercise

Автоматизированные UI-тесты сайта https://automationexercise.com с использованием Playwright.

## Быстрый старт

### 1. Клонировать репозиторий

```bash
git clone https://github.com/mrcr0wley/playwright-automationexercise.git
cd playwright-automationexercise
```

### 2. Установить зависимости

```bash
npm install
```

### 3. Запустить тесты

```bash
npx playwright test
```

### Просмотр отчёта

После запуска тестов сгенерируется HTML-отчёт. Чтобы открыть локально, выполни:

```bash
npx playwright show-report
```

### CI/CD
Тесты автоматически запускаются через GitHub Actions при пуше в репозиторий.