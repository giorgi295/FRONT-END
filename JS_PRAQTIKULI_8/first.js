function Task_1(sentc){
    snc = "<p class='sentenceplace'>" + sentc + "</p>";
    document.write('<h1>Task 1</h1>')
    document.write(snc)
}
Task_1("Input Text Here !");



function Task_2(x, y){
    sum_of = x + y;
    document.write('<h1>Task 2</h1>')
    document.write(sum_of);

}

Task_2(3, 5)




function Task_3(word, size){
    document.write('<h1>Task 3</h1>')
    document.write("<p>" + word.fontsize(size));


}

Task_3("Task 2 Text Here", "4");




function Task_4(wid){
    h1 = '<h1>Task 4</h1>'
    tb = "<table class='table-1'border=1 width = "+wid+" height=200>";
        for(i=0; i<2; i++){
            tb += "<tr>";
                for(j=0; j<2; j++){
                    tb += "<td>";
                    
                    tb += "</td>";
                }
            tb += "</tr>";
        }
    tb += "</table>"
    document.write(h1)
    document.write(tb)
}

Task_4("300");



function Task_5(hgt){
    h1 = '<h1>Task 5</h1>'
    tb = "<table class='table-2'border=1 width = 300  height="+ hgt + ">";
        for(i=0; i<2; i++){
            tb += "<tr>";
                for(j=0; j<2; j++){
                    tb += "<td>";
                    
                    tb += "</td>";
                }
            tb += "</tr>";
        }
    tb += "</table>"
    document.write(h1)
    document.write(tb)
}


Task_5("200")


function Task_6(wdt,hegt){
    h1 = '<h1>Task 6</h1>'
    tb = "<table class='table-3'border=1 width = "+ wdt +" height="+ hegt + ">";
        for(i=0; i<2; i++){
            tb += "<tr>";
                for(j=0; j<2; j++){
                    tb += "<td>";
                    
                    tb += "</td>";
                }
            tb += "</tr>";
        }
    tb += "</table>"
    document.write(h1)
    document.write(tb)
}


Task_6(300, 200)


function Task_7(tabcolor){
    h1 = '<h1>Task 7</h1>'
    tb = "<table id='ciyvi' class='table-4' border=1 width = 300 height= 200>";
    
    for(i=0; i<2; i++){
        tb += "<tr>";
            for(j=0; j<2; j++){
                tb += "<td>";
                
                tb += "</td>";
            }
        tb += "</tr>";
    }
    tb += "</table>"
    document.write(h1)
    document.write(tb)
    document.getElementById('ciyvi').style.backgroundColor = tabcolor;

}


Task_7('blue')


function Task_8(borw){
    
    h1 = '<h1>Task 8</h1>'
    tb = "<table class='table-5' border=" + borw + " width = 300 height= 200>";
    
    for(i=0; i<2; i++){
        tb += "<tr>";
            for(j=0; j<2; j++){
                tb += "<td>";
                
                tb += "</td>";
            }
        tb += "</tr>";
    }
    tb += "</table>"
    document.write(h1)
    document.write(tb)

}

Task_8(1)


function Task_9(tabwid, tabhgt, tablcolor, tabborw){
    
    h1 = '<h1>Task 9</h1>'
    tb = "<table id='ciyvi-1' class='table-6' border=" + tabborw + " width=" + tabwid + " height=" + tabhgt + ">";
    
    for(i=0; i<2; i++){
        tb += "<tr>";
            for(j=0; j<2; j++){
                tb += "<td>";
                
                tb += "</td>";
            }
        tb += "</tr>";
    }
    tb += "</table>"
    document.write(h1)
    document.write(tb)
    document.getElementById('ciyvi-1').style.backgroundColor = tablcolor;

}

Task_9(300, 200, 'red', 5)



function Task_11(){
    document.write("<h1>Task 11</h1>")
    for(i=1; i<11; i++){
        document.write(i)
    }
}

Task_11()



function Task_12(n){
    document.write("<h1>Task 12</h1>")
    for(i=1; i<n; i++){
        document.write("<p>" + i)
    }
}

Task_12(3)



function Task_13(m, n){
    document.write("<h1>Task 13</h1>")
    for(i=m; i<n; i++){
        document.write("<p>" + i)
    }
}

Task_13(0, 2)


function Task_14(m, n){
    document.write("<h1> Task 14</h1>")
    if(m > n){
        for(i=n; i<m; i++){
            document.write(i)
        }
    }else{
        for(i=m; i<n; i++){
            document.write(i)
        }
    }
}

Task_14(10, 5)


function Task_16(rows, columns){
    
    tb = "<table class='table-7' border=1  width = 300 height= 200>";
    
    for(i=0; i<rows; i++){
        tb += "<tr>";
            for(j=0; j<columns; j++){
                tb += "<td>";
                    tb += i + 1    
                    tb += " - "
                    tb += j + 1
                tb += "</td>";
            }
        tb += "</tr>";
    }
    document.write("<h1>Task 15</h1>")
    document.write(tb)
}

Task_15(3, 5)




