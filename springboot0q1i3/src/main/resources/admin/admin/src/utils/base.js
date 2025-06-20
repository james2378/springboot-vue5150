const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot0q1i3/",
            name: "springboot0q1i3",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot0q1i3/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于springboot的网购平台管理系统"
        } 
    }
}
export default base
