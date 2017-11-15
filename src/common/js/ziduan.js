export function liebiao (bianma) {
  let biaoti = {
    xieya: '血压',
    xietang: '空腹血糖',
    hxietang: '餐后2h血糖',
    ganyousanzhi: '甘油三酯',
    zhidanbai: '高密度脂蛋白',
    tizhong: '体重',
    shenggao: '身高',
    xieniaosuan: '血尿酸'
  }
  return biaoti[bianma]
}
