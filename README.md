# webpack template v1.1.0

Этот проект был создан при помощи сборщика Webpack. Для знакомства и настройки использовалась
официальная [документация](https://webpack.js.org/).

## Используемый стек технологий

- [React.js](https://react.dev/)
- [styled-components](https://styled-components.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/) - для создания локального стейта
- [Redux RTK Qury](https://redux-toolkit.js.org/rtk-query/overview) - для стейта на стороне сервера
- [Typescript](https://www.typescriptlang.org/)

## Подготовка к работе

1. Убедись что на компьютере установлена LTS-версия Node.js.
   [Скачай и установи](https://nodejs.org/en/) её если необходимо.
2. Установи базовые зависимости проекта командой `npm install`.
3. Запусти режим разработки, выполнив команду `npm start`.
4. Перейди в браузере по адресу [http://localhost:3000](http://localhost:3000). Эта страница будет
   автоматически перезагружаться после сохранения изменений в файлах проекта.

## Scripts

- `npm start` - запуск приложения в режиме разработки
- `npm run dev` - билд проекта в режиме разработки
- `npm run build` - билд проекта в продакшн
- `npm run typecheck` - проверка проекта на наличие ошибок typescript
- `npm run deploy` - деплой проекта на git-pages

## Деплой

Продакшн версия проекта будет автоматически проходить линтинг, собираться и деплоиться на
[git-pages](https://labofcode.github.io/ypsilon-frontend/)

## Инфо по процессу проектирования

### Шрифты

В проектре используется один шрифт - Montserrat в своих конфигурациях: Regular, Medium, Bold,
SemiBold. В случае, если в шаблоне встретиться другой, необходимо привести к одному из
перечисленных.

Шрифты подключены в фыйле `Globalstyle.ts` и установлен в `body` по-умолчанию

```ts
font-family: 'Montserrat';
font-size: 24px;
font-style: normal;
letter-spacing: normal;
font-weight: 400;
```

### Тема

Приложение обернуто в провайдер тем. Используемые в проекте цвета, тени, анимация, прописаны в файле
`Theme.ts`.

Для использования в стилизации достаточно в css-свойство передать callback функцию и в пропсе theme
обратиться к объекту theme и выбрать необходимое свойство:

```ts
background-color: ${({ theme }) => theme.colors.backgroundWhite};
```

Для работы с медиа правилами при адаптации в `Theme.ts` предусмотрен объект `media`. Шаблон для
использования:

```ts
@media ${({ theme }) => theme.media.tablet}{}
@media ${({ theme }) => theme.media.desktop}{}
```

### Изображения

Для подключения .svg изображений используется обычный импорт и вставка изображения как
react-компонента, в который можно прокинуть пропсы для уменьшения кода стилей

```tsx
import imIconage from '*.svg';

<Icon
  width={'32px'}
  height={'32px'}
  color="red"
/>;
```

Для работы с svg sprite, достаточно, без импорта, указать

```tsx
<svg>
  <use href="#svg_sprite_id иконки в спрайте"></use>
</svg>
```

Для работы с другими изображениями, используется стандартный подход

```tsx
import image from '...';

<img
  src={image}
  alt=""
/>;
```

### Вспомогательные компоненты

- `Container` - адаптированный контейнер всего приложения

```ts
import Container from '@/components/Container';

return (
	<Container>
		...
	</Container>
);
```

- `Flex` - готовый флекс контейнер со стандартными значениями по-умолчанию. Индивидуальные настройки
  можно передать пропсами:

```tsx
import Flex from '@/components/Flex/Flex';

<Flex
  direction="column"
  align="center"
  justify="center"
  gap="24px"
  margin="20px 12px 36px 12px"
>
  ...
</Flex>;
```

- `Button` - настраиваемый компонент кнопки

```tsx
import {Button} from '@/components/Button/Button';

<Button $yellow>Підібрати вакансію</Button>
<Button $teal>Залишити заявку</Button>
<Button $ocean width="190px">Увійти</Button>
<Button $teal width="210px">Додати</Button>
<Button	$teal width="210px" fontSize="16px">Написати нам</Button>
<Button $disabled>Підібрати вакансію</Button>
```

- `LinkButton` - настраиваемый компонент кнопки-ссылки. Используется также, как и компонент
  `Button`, имеет те же пропсы, плюс обязательный пропс `to`.

- `InputField` - компонент поля ввода для использования в формах Formik

```tsx
import InputField from '@/components/InputField/InputField';

<InputField
  label="Country"
  placeholder="Country"
  name="country"
/>;
```

ПЕРЕД ИСПОЛЬЗОВАНИЕМ НУЖНО ДОСТИЛИЗИРОВАТЬ

- `responsive` - в `helpers` добавил функцию для работы с адаптивными изображениями. Пример
  использования:

```tsx
const { isMobile, isTablet, isDesktop } = responsive();

return(
	{isMobile && (<img src={map_m} alt="map"/>)}
	{isTablet && (<img src={map_t} alt="map"/>)}
	{isDesktop && (<img src={map_d} alt="map"/>)}
)
```
