const state = {
    addFlag: false,
    addId: -1
}

const actions = {
    setAddId(context,id) {
        setTimeout(() => {
            context.commit("addId",id);
        },200)
    }
}

const mutations = {
    addId(state,id) {
        state.addId = id;
        state.addFlag = !state.addFlag;
    }
}

const getters = {
    addFlag: state => state.addFlag,
    addId: state => state.addId
}

export default {
    state,
    actions,
    mutations,
    getters
}