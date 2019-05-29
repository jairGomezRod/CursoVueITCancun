import Records from "@/pages/records";
import Home from '@/components/Scoreboard.vue';
import NotFound from "@/pages/error";

const routes = [
    {
      path: "/",
      component: Home,
      name: "home"
    },
    {
        path: "/records-:name",
        component:Records,
        name:"records"        ,
    },
    
    {
        path:"/404",
        component:NotFound,
        name:"notFound"
    },
    {
        path:"*",
        redirect:"/404"
    }
];

export default routes;