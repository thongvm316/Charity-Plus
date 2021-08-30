import Home from 'views/Home/Home'
import AboutUs from 'views/AboutUs/AboutUs'
import Causes from 'views/Causes/Causes'
import Events from 'views/Events/Events'
import Pages from 'views/Pages/Pages'
import Contact from 'views/Contact/Contact'

const routes = [
  {
    component: Home,
    path: '/home',
  },
  {
    component: AboutUs,
    path: '/about-us',
  },
  {
    component: Causes,
    path: '/causes',
  },
  {
    component: Events,
    path: '/events',
  },
  {
    component: Pages,
    path: '/pages',
  },
  {
    component: Contact,
    path: '/contact',
  },
]

export default routes
