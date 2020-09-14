import $request from '@/helpers/request.js'

/**
 * 创建圈
 * @param {string} name - 圈名称
 * @param {string} position - 圈中心位置
 * @param {string} radius - 圈半径
 * @param {string} type - 圈类型
 * @param {number} effective - 圈的有效时间 单位天
 * @param {string} synopsis - 圈简介 可空
 * @param {string} explain - 圈的入圈说明 可空
 * @param {string} notice - 圈公告 可空
 * */
export function creatCircle(data) {
	return $request('/circle/creatCircle', {
		method: 'POST',
		data
	})
}