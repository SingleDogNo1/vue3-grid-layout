import { App, Plugin } from 'vue'
import GridLayout from './GridLayout/GridLayout.vue'
import GridItem from './GridLayout/GridItem.vue'

export { GridLayout, GridItem }
const GridLayoutPlugin: Plugin = {
  install(app: App) {
    app.component('grid-layout', GridLayout)
    app.component('grid-item', GridItem)
  }
}
export default GridLayoutPlugin
