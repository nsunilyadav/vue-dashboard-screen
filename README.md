# Dashboard Screen

Sample code for dashboard screen.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

## Directory

```
public
  - faviocn.ico
  - index.html
src
    assets
        - logo.png
    components
        - Dashboard.component.vue
        - DashboardChart.component.vue
        - DashboardTable.component.vue
        - Loader. component.vue
    - App.vue
    - Main.js
```

## Packages used

<ul>
  <li>Axios - used for api calls</li>
  <li>apexcharts & vue-apexcharts - used for graph</li>
  <li>bootstrap & bootstrap-vue - for designing.</li>
  <li>dotenv - to read .env file.</li>
  <li>vue-loading-skeleton - used for skeleton loading.</li>
</ul>

## Files description

`src > components > Dashboard.component.vue` - Main component for dashboard that contains DashboardChart and DashboardTable components.

`src > components > DashboardChart.component.vue` - component is used for chart.

`src > components > DashboardTable.component.vue` - Component used for table.

`src > components > Loader.component.vue` - Component used for Loader.
