// 将日期进行格式化表示
export default  function dateFormat (date: string): string{
    let date_: number = new Date(date).valueOf();
    let now = Date.now();
    let diff:number = Math.floor((now - date_)/1000);
    let day = Math.floor(diff / 3600 / 24);
    if (day >= 1) {
        return day + "天前";
    }
    let hour = Math.floor((diff % (3600 * 24)) / 3600);
    if (hour >= 1) {
        return hour + "小时前";
    }
    let minute = Math.floor((diff % 3600) / 60);
    if (minute >= 1) {
        return minute + "分钟前";
    }
    return "刚刚";
}
