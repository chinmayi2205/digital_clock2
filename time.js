setInterval(() => {
       
       let dayname = document.getElementById('dayname');
       let month = document.getElementById('month');
       let daynum = document.getElementById('daynum');
       let year = document.getElementById('year');

       let dy = new Date().toLocaleString("default",{weekday: "long"});
       let mon = new Date().toLocaleString("default",{month: "short"});
       let dnum= new Date().getDate();
       let yr = new Date().getFullYear();

       let hours = document.getElementById('hours');
       let minutes = document.getElementById('minutes');
       let seconds = document.getElementById('seconds');
       let periods = document.getElementById('periods');

       let h = new Date().getHours();
       let m = new Date().getMinutes();
       let s = new Date().getSeconds();
       let prd = h >= 12 ? 'PM' : 'AM';

    if (h > 12) {
        h = h - 12;
    }


    if (h < 10) {
        h = '0' + h;
    }
    if (m < 10) {
        m = '0' + m;
    }
    if (s < 10) {
        s = '0' + s;
    }
    
    hours.innerHTML= h +":";      
    minutes.innerHTML= m +":";
    seconds.innerHTML= s;
    periods.innerHTML= prd;
    
    dayname.innerHTML = dy + ",";
    month.innerHTML = mon ;
    daynum.innerHTML = dnum +",";
    year.innerHTML = yr;
});
