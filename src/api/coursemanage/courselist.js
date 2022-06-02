//获取课程列表数据
import request from '@/utils/request';
//获取课程列表接口  携带当前页 每页展示数据条数两个参数
export const reqCourseList = (page,limit) =>request({url:`/admin/product/baseTrademark/${page}/${limit}`,method:'get'});