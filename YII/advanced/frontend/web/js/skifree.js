(function () {
    const FPS = 60;
    const TAMX = 300;
    const TAMY = 400;
    const PROB_ARVORE = 1.5;
    const PROB_ARBUSTO = 0.5;
    const PROB_ROCHA = 0.5;
    const PROB_TOCO = 0.5;
    const PROB_ARVORAO = 1.5;
    var gameLoop;
    var montanha;
    var skier;
    var direcoes = ['para-esquerda', 'para-frente', 'para-direita']

    //obstaculos
    var trees = [];
    var bush1s = [];
    var rocks = [];
    var treelogs = [];
    var arvoronas = [];

    function init() {
        montanha = new Montanha();
        skier = new Skier();
        gameLoop = setInterval(run, 1000 / FPS);
    }

    window.addEventListener('keydown', function (e) {
        if (e.key == 'a') skier.mudarDirecao(-1);
        else if (e.key == 'd') skier.mudarDirecao(1);
        if (e.key == 'f') {
            if (skier.velocidade == 1.5) {
                skier.frear();
            }
            else {
                skier.acelerar();
            }
        }
    });

    function refreshData() {
        var dist = document.getElementById("distancia");
        var vida = document.getElementById("vidas");

        dist.innerHTML = "Distancia: " + Math.round(skier.distancia);
        vida.innerHTML = "Vidas: " + skier.vidas;
    }

    class Montanha {
        constructor() {
            this.element = document.getElementById("montanha");
            this.element.style.width = TAMX + "px";
            this.element.style.height = TAMY + "px";
        }
    }

    class Skier {
        constructor() {
            this.element = document.getElementById("skier");
            this.direcao = 1; //0-esquerda;1-frente;2-direita
            this.element.className = 'para-frente';
            this.element.style.top = '35px';
            this.element.style.left = parseInt(TAMX / 2) - 7 + 'px';
            this.velocidade = 1;
            this.distancia = 0;
            this.vidas = 3;
            this.acelerar = function () {
                this.velocidade = 1.5;
            };
            this.frear = function () {
                this.velocidade = 1.0;
            };
            this.mudarDirecao = function (giro) {
                if (this.direcao + giro >= 0 && this.direcao + giro <= 2) {
                    this.direcao += giro;
                    this.element.className = direcoes[this.direcao];
                }
            };
            this.andar = function () {

                if (this.direcao == 0 && skier.velocidade == 1) {
                    this.element.style.left = (parseInt(this.element.style.left) - 1) + "px";
                }
                if (this.direcao == 0 && skier.velocidade == 1.5) {
                    this.element.style.left = (parseInt(this.element.style.left) - 1.5) + "px";
                }
                if (this.direcao == 2 && skier.velocidade == 1.0) {
                    this.element.style.left = (parseInt(this.element.style.left) + 1) + "px";
                }
                if (this.direcao == 2 && skier.velocidade == 1.5) {
                    this.element.style.left = (parseInt(this.element.style.left) + 2) + "px";
                }
                if (skier.velocidade == 1.0) {
                    skier.distancia += 20 / FPS;
                }
                if (skier.velocidade == 1.5) {
                    skier.distancia += 30 / FPS;
                }
            };
        }
    }

    class Tree {
        constructor() {
            this.element = document.createElement('div');
            montanha.element.appendChild(this.element);
            this.element.className = 'tree';
            this.element.style.top = TAMY + "px";
            this.element.style.left = Math.floor(Math.random() * TAMX) + "px";
        }
    }

    class TreeLog {
        constructor() {
            this.element = document.createElement('div');
            montanha.element.appendChild(this.element);


            this.element.className = 'treelog';
            this.element.style.top = TAMY + "px";
            this.element.style.left = Math.floor(Math.random() * TAMX) + "px";
        }
    }


    class Rock {
        constructor() {
            this.element = document.createElement('div');
            montanha.element.appendChild(this.element);


            this.element.className = 'rock';
            this.element.style.top = TAMY + "px";
            this.element.style.left = Math.floor(Math.random() * TAMX) + "px";
        }
    }

    class BigTree {
        constructor() {
            this.element = document.createElement('div');
            montanha.element.appendChild(this.element);


            this.element.className = 'arvorao';
            this.element.style.top = TAMY + "px";
            this.element.style.left = Math.floor(Math.random() * TAMX) + "px";
        }
    }
    class Bush1 {
        constructor() {
            this.element = document.createElement('div');
            montanha.element.appendChild(this.element);


            this.element.className = 'bush1';
            this.element.style.top = TAMY + "px";
            this.element.style.left = Math.floor(Math.random() * TAMX) + "px";
        }
    }  




    function run() {
        var random = Math.floor(Math.random() * 1000);

        if (random <= PROB_ARVORE * 10) {
            var tree = new Tree();
            trees.push(tree);
        }

        trees.forEach(function (a) {
            a.element.style.top = (parseInt(a.element.style.top) - skier.velocidade) + "px";
        });

        if (random <= PROB_ARBUSTO * 10) {
            var bush1 = new Bush1();
            bush1s.push(bush1);
        }

        bush1s.forEach(function (b) {
            b.element.style.top = (parseInt(b.element.style.top) - skier.velocidade) + "px";
        });

        if (random <= PROB_ROCHA * 10) {
            var rock = new Rock();
            rocks.push(rock);
        }

        rocks.forEach(function (c) {
            c.element.style.top = (parseInt(c.element.style.top) - skier.velocidade) + "px";
        });

        if (random <= PROB_TOCO * 10) {
            var treelog = new TreeLog();
            treelogs.push(treelog);
        }

        treelogs.forEach(function (d) {
            d.element.style.top = (parseInt(d.element.style.top) - skier.velocidade) + "px";
        });

        if (random <= PROB_ARVORAO * 10) {
            var arvorao = new BigTree();
            arvoronas.push(arvorao);
        }

        arvoronas.forEach(function (f) {
            f.element.style.top = (parseInt(f.element.style.top) - skier.velocidade) + "px";
        });

        skier.andar();
        refreshData();
    }
    init();
})();