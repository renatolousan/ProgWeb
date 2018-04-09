for (j = 1; j <= 10; j++) {
    document.write("<table border=1>");
    document.write("<tr colspan=2><th colspan=2><b>Produtos de " + j + "</b></th></tr>")
    for (i = 1; i <= 10; i++) {
        document.write("<tr><td>" + j + "x" + i + "</td><td>" + i * j + "</td></tr>");
    }
    document.write("</table>");
}