
/**
 * 
 * @param {*} pageSize 一页多少条
 * @param {*} curreentPage  当前页
 * @param {*} list        数组
 */
export function paging(pageSize, currentPage, list) {
    // 计算一共有几页
    let totalPage = Math.ceil(list.length / pageSize);

    // 计算得0时设置为1
    totalPage = totalPage === 0 ? 1 : totalPage;


    let begin = (currentPage - 1) * pageSize;
    let end = currentPage * pageSize;
    return list.slice(begin, end)
}