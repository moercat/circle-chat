import { getSearch, uploadImage } from '@/api/common.js'

export default {
	async getSearchList({ commit }, keyword) {
		const searchList = await getSearch(keyword)
		commit('setSearchList', searchList)
	},

	async uploadImage({ commit }, path) {
		const url = await uploadImage(path)
		commit('setImageUrl', url)
	}
}
