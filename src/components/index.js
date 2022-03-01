import left1 from "./leftchart/left-1";
import left2 from "./leftchart/left-2";

export default {
    install(vue) {
        vue.component("left1", left1);
        vue.component("left2", left2);
    }
}