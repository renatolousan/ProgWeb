function someFn(numero){
    return function() {
        numero = numero + 3;
        console.log("Primeira chamada " + numero);
        return function() {
            numero = numero + 1;
            console.log("Segunda chamada " + numero);
                return function(){
                    numero = numero + 5;
                    console.log("Terceira chamada " + numero);
                }
            
        }
    }
}