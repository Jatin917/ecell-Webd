let time_left = document.getElementById('time-left');
function set_time(){
let date = new Date();
let today = date.getDate();
// let after_5_days = today+5;
let thour = date.getHours();
let tmin = date.getMinutes();
let tsec = date.getSeconds();
let tleft = 24*3600-(thour*3600+tmin*60+tsec);
let ttleft = 4*24*3600 + tleft;
let total_hour_left = ttleft/3600;
// let total_hour_left = ttleft/3600;
// console.log(Math.floor(total_hour_left));
// console.log(total_hour_left);
let t_m_l = (total_hour_left%1)*60;
let t_s_l = (t_m_l%1)*60;
time_left.innerHTML = (Math.floor(total_hour_left)+ "hrs : " + Math.floor(t_m_l) + "mins : " + Math.floor(t_s_l) +"secs ");
}
setInterval(set_time,1000);




