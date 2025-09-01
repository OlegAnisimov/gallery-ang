# PhotoGallery

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.1.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

plan
1. requirement - Use Angular Material components
choose ang material component, first view:
for header - https://material.angular.dev/components/toolbar/overview 
for main content - https://material.angular.dev/components/grid-list/overview 
for loader - https://material.angular.dev/components/progress-spinner/overview  
for img desc on hover - https://material.angular.dev/components/tooltip/examples 

2. requirement - Implement the infinitive scroll on your own. Do not use libraries.
plan
target
  get working implementation

TAG-steps:  
on app componet test implementation of scroll
test on mobile and desctop
!NB NEED TOUCH
use onPush cds
try zoneless cds

проработать вариант intersection observer dom api for infinitive loops
что надо решить?
инициализация - первичный набор items должен как отображаться
  только те которые полностью видны отображатся + возможность скролла
  
  расчет достпной высоты дисплея и рассчет кол-ва загружаемых изображений с учетом высоты  
  
  TAG-V2: хардкод кол-во загружаемых значений - сколько загрузили - отобразили  - при скролле еще один чанк
  здесь грузят по 20 https://www.promeai.pro/design-ideas-ai-images/infinitive 

  самым простым видится варинатс хардкодом

  TAG-V1: самым интересным видится варинат с расчетом достпумной высоты контйенера - 
  загрузки набора изображений которые можно полностью отобразить на экране - 
  если остается внизу пространство - отображение надписи (далее scroll sign) scroll for more images + скролл бар -
  если пространства внизу нет просто отобржаеем скролл бар
  либо заложить пространство внизу для scroll sign при расчете достпных высот - ? что делать с scroll sign после инита

  пробуем TAG-V1
  нужно исходить из того, что должен быть отдельный reusable компонент галерея работающий на системе инпутов
  ? отсюда вопрос нужен ли инпут высота - например у материал grid list есть инпут высота
  ? как делать кмпонент с учетом требования № 1 - а именно использовать https://material.angular.dev/components/grid-list/examples 

  ? как рассчитать достпную высоту
    у нас есть хэдер опрежеленной высоты либо мы можем получить его высоту на этапе инициализации 
    то есть вся достпная высота минус высота хэдера у учетом границ и марджинов при наличии 

  Важно только scroll вниз


props list
items: Signal<any> = []
есть варинат с количеством первоначально загружаемых изображений

use divs with 
height: 200px;
width: 200px;

3. requirement free API -  https://jsonplaceholder.typicode.com  /photos пример с лимитом - https://jsonplaceholder.typicode.com/photos?_limit=10

4. requirement must have image-optimization - https://angular.dev/guide/image-optimization