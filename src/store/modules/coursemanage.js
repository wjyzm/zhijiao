import {reqCourseList} from '@/api/coursemanage/courselist'
let state={
        courseList:[]
};
let mutations={
    COURSELIST(state,courseList){
        state.courseList=courseList;
    }
}
let actions ={
    async courseList({commit},listMsg){
        const { page, limit } = listMsg;
        return new Promise((resolve,reject)=>{
            reqCourseList(page,limit).then(response=>{
                commit("COURSELIST",response.data);
                resolve;
            }).catch(error=>{
                reject(error);
            })
        })
        /*
         return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(response => {
        const { data } = response
        commit('SET_TOKEN', data.token)
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })*/ 

    /*
        let result = await reqCourseList(page,limit);
        console.log(result);
        if(result.code==200||result.code==20000){
            commit("COURSELIST",result.data);
        }
        */
    }
}
let getters={

}
export default{
    state,
    mutations,
    actions,
    getters
}