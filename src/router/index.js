import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import PSCenter from '@/components/pages/PSCenter/PSCenter'
import PSBind from '@/components/pages/PSCenter/PSComponent/PSBind.vue'
import PSInfo from '@/components/pages/PSCenter/PSComponent/PSInfo.vue'
import PSCourse from '@/components/pages/PSCenter/PSComponent/PSCourse.vue'
import PSNotes from '@/components/pages/PSCenter/PSComponent/PSNotes.vue'
import PSBook from '@/components/pages/PSCenter/PSComponent/PSBook.vue'
import PSAdress from '@/components/pages/PSCenter/PSComponent/PSAdress.vue'
import Courses from '@/components/courses/courses'
import Home from '@/components/home/home'
import Video from '@/components/home/Video'
import Chat from '@/components/chat/chat'
import FriendCard from '@/components/chat/friendCard'
import CourseEdit from '@/components/courses/edit/CourseEdit'
import CourseDetail from '@/components/courseDetail/course-detail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/courese',
      component: Courses
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/video/:cid/:chapterId/:sectionId',
      component: Video
    },
    {
      path: '/chat',
      component: Chat
    },
    {
      path: '/course/edit/',
      component: CourseEdit,
      name: "editCourse"
    },
    {
      path: '/course/:id',
      component: CourseDetail
    },
    {
      path: '/pscenter',
      component: PSCenter,
      children: [
        {path: '/', name: 'PSInfo', component: PSInfo},
        {path: '/pscenter/pscourse', name: 'PSCourse', component: PSCourse},
        {path: '/pscenter/psnotes', name: 'PSNotes', component: PSNotes},
        {path: '/pscenter/psbook', name: 'PSBook', component: PSBook},
        {path: '/pscenter/psadress', name: 'PSAdress', component: PSAdress} ]
    },
    {
      path: '/courses/:keyword',
      component: Courses,
    }
  ]
})
