import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Project from './views/Project'
import Coding from './views/Coding'
import Appui from './views/Appui'
import Graphic from './views/Graphic'
import MerFragrance from './views/MerFragrance'
import MainStreamMedia from './views/MainStreamMedia'
import LingoWedding from './views/LingoWedding'
import RoastinCoffee from './views/RoastinCoffee'
import BirdIsland from './views/BirdIsland'
import Drk from './views/Drk'
import InstoApp from './views/InstoApp'
import LittleStar from './views/LittleStar'
import HelloPainter from './views/HelloPainter'
import InstoStore from './views/InstoStore'
import FjuArtGallery from './views/FjuArtGallery'
import Passion from './views/Passion'
import Installments from './views/Installments'
import SmartLight from './views/SmartLight'
import Winelyzer from './views/Winelyzer'
import GoPets from './views/GoPets'
import LiveHygro from './views/LiveHygro'
import MeChef from './views/MeChef'
import ComicBooksSelector from './views/ComicBooksSelector'
import ValidationForm from './views/ValidationForm'
import MaskMap from './views/MaskMap'
import Pomodoro from './views/Pomodoro'
import MusicPlayer from './views/MusicPlayer'
import TodoList from './views/TodoList'
import JyjGolf from './views/JyjGolf'
import SavageCamping from './views/SavageCamping'
import Wudenjiang from './views/WudenJiang'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: 'mozzz.me',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/projects',
      component: Project
    },
    {
      path: '/ui',
      component: Appui
    },
    {
      path: '/coding',
      component: Coding
    },
    {
      path: '/graphic',
      component: Graphic
    },
    {
      path: '/mer-fragrance',
      component: MerFragrance,
      alias: '/project/mer-fragrance'
    },
    {
      path: '/main-stream-media',
      component: MainStreamMedia,
      alias: '/project/main-stream-media'
    },
    {
      path: '/lingo-wedding',
      component: LingoWedding,
      alias: '/project/lingo-wedding'
    },
    {
      path: '/roastincoffee',
      component: RoastinCoffee,
      alias: '/project/roastincoffee'
    },
    {
      path: '/birdisland',
      component: BirdIsland,
      alias: '/project/birdisland'
    },
    {
      path: '/instoapp',
      component: InstoApp,
      alias: '/project/instoapp'
    },
    {
      path: '/drk',
      component: Drk,
      alias: '/project/drk'
    },
    {
      path: '/little-star',
      component: LittleStar,
      alias: '/project/little-star'
    },
    {
      path: '/hello-painter',
      component: HelloPainter,
      alias: '/project/hello-painter'
    },
    {
      path: '/hello-painter',
      component: HelloPainter,
      alias: '/project/hello-painter'
    },
    {
      path: '/insto-store',
      component: InstoStore,
      alias: '/project/insto-store'
    },
    {
      path: '/fju-art-gallery',
      component: FjuArtGallery,
      alias: '/project/fju-art-gallery'
    },
    {
      path: '/passion',
      component: Passion,
      alias: '/project/passion'
    },
    {
      path: '/installments',
      component: Installments,
      alias: '/project/installments'
    },
    {
      path: '/smart-light',
      component: SmartLight,
      alias: '/project/smart-light'
    },
    {
      path: '/winelyzer',
      component: Winelyzer,
      alias: '/project/winelyzer'
    },
    {
      path: '/gopets',
      component: GoPets,
      alias: '/project/gopets'
    },
    {
      path: '/livehygro',
      component: LiveHygro,
      alias: '/project/livehygro'
    },
    {
      path: '/mechef',
      component: MeChef,
      alias: '/project/mechef'
    },
    {
      path: '/comicbooks-selector',
      component: ComicBooksSelector,
      alias: '/project/comicbooks-selector'
    },
    {
      path: '/validation-form',
      component: ValidationForm,
      alias: '/project/validation-form'
    },
    {
      path: '/mask-map',
      component: MaskMap,
      alias: '/project/mask-map'
    },
    {
      path: '/music-player',
      component: MusicPlayer,
      alias: '/project/music-player'
    },
    {
      path: '/pomodoro',
      component: Pomodoro,
      alias: '/project/pomodoro'
    },
    {
      path: '/todolist',
      component: TodoList,
      alias: '/project/todolist'
    },
    {
      path: '/jyj-golf',
      component: JyjGolf,
      alias: '/project/jyj-golf'
    },
    {
      path: '/savage-camping',
      component: SavageCamping,
      alias: '/project/savage-camping'
    },
    {
      path: '/wudenjiang',
      component: Wudenjiang,
      alias: '/project/Wudenjiang'
    }
  ]
})
