let w = +prompt("Nhập Cân nặng (kg)");
let h = +prompt("Nhập chiều cao (m)");
let b = +(-w/(h*h));
    if (b<18.5){ alert("Bạn đang bị gầy")
    }else if(18.5<=b<25){alert("Bạn đang bình thường")
    }else if(25<=b<30){alert("Bạn đang bị mập")
    }else if(30<=b<35){alert("Bạn đang bị béo C1")
    }else if(35<=b<40){alert("Bạn đang bị béo C2")
    }else if("Bạn đang bị nguy hiểm");