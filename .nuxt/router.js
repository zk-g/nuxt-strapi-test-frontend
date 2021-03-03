import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8f938f14 = () => interopDefault(import('..\\pages\\articles\\_slug.vue' /* webpackChunkName: "pages/articles/_slug" */))
const _594e6af7 = () => interopDefault(import('..\\pages\\categories\\_slug.vue' /* webpackChunkName: "pages/categories/_slug" */))
const _4f8c38db = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/articles/:slug?",
    component: _8f938f14,
    name: "articles-slug"
  }, {
    path: "/categories/:slug?",
    component: _594e6af7,
    name: "categories-slug"
  }, {
    path: "/",
    component: _4f8c38db,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
