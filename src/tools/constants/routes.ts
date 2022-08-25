// TODO: add translation if needed
// all routes in the app
export const APP_ROUTES = {
  home: '/',
  login: '/login/', //test purpose if you want to append search filters, see example in Login page
  notFound: '/404',
  unauthorized: '/unauthorized',
  jobs: '/jobs',
  data: '/data'
}

// navigation menu based on role
export const MENU_ROUTES_CANDIDATE = [
  {
    path: '/jobs',
    name: 'Jobs'
  },
  {
    path: '/favourites',
    name: 'Favourites'
  },
  {
    path: '/applications',
    name: 'Applications'
  },
  {
    path: '/faq',
    name: 'FAQ'
  }
]

export const MENU_ROUTES_COMPANY = [
  {
    path: '/data',
    name: 'Data'
  },
]