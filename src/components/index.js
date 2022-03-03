import left1 from "./leftchart/left-1";
import left2 from "./leftchart/left-2";
import left3 from "./leftchart/left-3";
import right1 from './rightchart/right-1'
import right2 from './rightchart/right-2'
import right3 from './rightchart/right-3'

export default {
    install(vue) {
        vue.component("left1", left1);
        vue.component("left2", left2);
        vue.component("left3", left3);
        vue.component("right1", right1);
        vue.component("right2", right2);
        vue.component("right3", right3);
    }
}