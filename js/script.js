"use-strict";

document.addEventListener('DOMContentLoaded', function() {

    /**
     * =========================================================================
     *       CONSTANTE CODES DES TOUCHES
     * =========================================================================
     **/
    const codeTouche = {
        "alpha": {
            "aA": {"a": 97, "A": 65},
            "zZ": {"z": 122, "Z": 90},
            "eE": {"e": 101, "E": 69},
            "rr": {"r": 114, "R": 82},
            "tT": {"t": 116, "T": 84},
            "yY": {"y": 121, "Y": 89},
            "uU": {"u": 117, "U": 85},
            "iI": {"i": 105, "I": 73},
            "oO": {"o": 111, "O": 79},
            "pP": {"p": 112, "P": 80},
            "qQ": {"q": 113, "Q": 81},
            "sS": {"s": 114, "S": 83},
            "dD": {"d": 100, "D": 68},
            "fF": {"f": 102, "F": 70},
            "gG": {"g": 103, "G": 71},
            "hH": {"h": 104, "H": 72},
            "jJ": {"j": 106, "J": 74},
            "kK": {"k": 107, "K": 75},
            "lL": {"l": 108, "L": 76},
            "mM": {"m": 109, "M": 77},
            "wW": {"w": 119, "W": 87},
            "xX": {"x": 120, "X": 88},
            "cC": {"c": 99, "C": 67},
            "vV": {"v": 118, "V": 86},
            "bB": {"b": 98, "B": 66},
            "nN": {"n": 110, "N": 78}            
        },
        "ponctuation": {
            ",?": {",": 188, "?": 188},
            ";.": {";": 186, ".": 110},
            ":/": {":": 190, "/": 111},
            "!§": {"!": 223, "§": 223},
            "<>": {"<": 226, ">": 226},
            "ù%": {"ù": 192, "%": 192},
            "*µ": {"*": 42, "µ": 220},
            "^¨": {"^": 221, "¨": 221},
            "$£¤": {"$": 36, "£": 186, "¤": 186},
            "²": {"²": 222},
            "&1": {"&": 38, "un": 49},
            "é2~": {"é": 50, "deux": 50, "~": 126},
            "\"3#": {"\"": 34, "trois": 51, "#": 51},
            "'4{": {"'": 39, "quatre": 52, "{": 123},
            "(5[": {"(": 53, "cinq": 53, "[": 91},
            "-6|": {"-": 45, "six": 54, "|": 54},
            "è7`": {"è": 55, "sept": 55, "`": 96},
            "_8\\": {"_": 95, "huit": 56, "\\": 92},
            "ç9^": {"ç": 57, "neuf": 57, "^": 94},
            "à0@": {"à": 48, "zero": 48, "@": 64},
            ")°]": {")": 219, "°": 219, "]": 95},
            "=+}": {"=": 187, "+": 187, "}": 125},
            "backspace": {"backspace": 8,},
            "tab": {"tabulation": 9},
            "shift": {"shift": 16},
            "enter": {"enter": 13},
            "alt": {"alt": 18},
            "meta": {"meta": 91},
            "context_menu": {"context_menu": 93},
            "espace": {"espace": 32},
            "ctrl": {"ctrl": 17},
            "caps_lock": {"caps_lock": 20},
        }
    }
    /**
     * =========================================================================
     *       OBJETS TOUCHES
     * =========================================================================
     **/
    const minuscule = {
        "a": "a",
        "b": "b",
        "c": "c",
        "d": "d",
        "e": "e",
        "f": "f",
        "g": "g",
        "h": "h",
        "i": "i",
        "j": "j",
        "k": "k",
        "l": "l",
        "m": "m",
        "n": "n",
        "o": "o",
        "p": "p",
        "q": "q",
        "r": "r",
        "s": "s",
        "t": "t",
        "u": "u",
        "v": "v",
        "w": "w",
        "x": "x",
        "y": "y",
        "z": "z"
    }
    const majuscule = {
        "a_maj": "A",
        "b_maj": "B",
        "c_maj": "C",
        "d_maj": "D",
        "e_maj": "E",
        "f_maj": "F",
        "g_maj": "G",
        "h_maj": "H",
        "i_maj": "I",
        "j_maj": "J",
        "k_maj": "K",
        "l_maj": "L",
        "m_maj": "M",
        "n_maj": "N",
        "o_maj": "O",
        "p_maj": "P",
        "q_maj": "Q",
        "r_maj": "R",
        "s_maj": "S",
        "t_maj": "T",
        "u_maj": "U",
        "v_maj": "V",
        "w_maj": "W",
        "x_maj": "X",
        "y_maj": "Y",
        "z_maj": "Z"
    }
    const numerique = {
        "zero": "0",
        "un": "1",
        "deux": "2",
        "trois": "3",
        "quatre": "4",
        "cinq": "5",
        "six": "6",
        "sept": "7",
        "huit": "8",
        "neuf": "9"
    }
    const ponctuation = {
        "barre_verticale": "|",
        "dieze": "#",
        "plus": "+",
        "egale": "=",
        "plus_grand_que": ">",
        "plus_petit_que": "<",
        "virgule": ",",
        "point" : ".",
        "exclamation": "!",
        "interrogation": "?",
        "deux_points": ":",
        "point_virgule": ";",
        "slashe": "/",
        "modele": "§",
        "accolade_ouvrante": "{",
        "accolade_fermante": "}",
        "crochet_ouvrant": "[",
        "crochet_fermant": "]",
        "parenthese_ouvrante": "(",
        "parenthese_fermante": ")",
        "degree": "°",
        "arobase": "@",
        "a_accentGrave": "à",
        "c_cedille": "ç",
        "e_accentAigue": "é",
        "e_accentGrave": "è",
        "backtite": "`",
        "underscore": "_",
        "tiret": "-",
        "simple_quote": "'",
        "double_quote": "\"",
        "tilde": "~",
        "esperluette": "&",
        "anti_slashe": "\\",
        "accent_circonflexe": "^",
        "tremat": "¨",
        "dollars": "$",
        "livres": "£",
        "symbole_monetaire": "¤",
        "asterix": "*",
        "micro": "µ",
        "backspace ": "\b",
        "tabulation": "\t",
        "enter": "\r",
        "shift": "",
        "alt": "",
        "ctrl": "",
        "caps_lock": "",
        "espace": "&nbsp;",
        "context_menu": "",
        "meta": "",
        "exposant": "²",
        "u_accent": "ù",
        "pourcentage": "%",
        "euro": "€"
    }

    /**
     * =========================================================================
     *       CONSTANTE TOUCHES
     * =========================================================================
     **/
    const touche_aA = document.querySelector('.btn_aA');
    const touche_zZ = document.querySelector('.btn_zZ');
    const touche_eE = document.querySelector('.btn_eE');
    const touche_rR = document.querySelector('.btn_rR');
    const touche_tT = document.querySelector('.btn_tT');
    const touche_yY = document.querySelector('.btn_yY');
    const touche_uU = document.querySelector('.btn_uU');
    const touche_iI = document.querySelector('.btn_iI');
    const touche_oO = document.querySelector('.btn_oO');
    const touche_pP = document.querySelector('.btn_pP');
    const touche_qQ = document.querySelector('.btn_qQ');
    const touche_sS = document.querySelector('.btn_sS');
    const touche_dD = document.querySelector('.btn_dD');
    const touche_fF = document.querySelector('.btn_fF');
    const touche_gG = document.querySelector('.btn_gG');
    const touche_hH = document.querySelector('.btn_hH');
    const touche_jJ = document.querySelector('.btn_jJ');
    const touche_kK = document.querySelector('.btn_kK');
    const touche_lL = document.querySelector('.btn_lL');
    const touche_mM = document.querySelector('.btn_mM');
    const touche_wW = document.querySelector('.btn_wW');
    const touche_xX = document.querySelector('.btn_xX');
    const touche_cC = document.querySelector('.btn_cC');
    const touche_vV = document.querySelector('.btn_vV');
    const touche_bB = document.querySelector('.btn_bB');
    const touche_nN = document.querySelector('.btn_nN');

    const touche_plusGrandQue_plusPetitQue = document.querySelector('.btn_plusgrandQue_plusPetitQue')
    const touche_virgule_interrogation = document.querySelector('.btn_virgule_interrogation');
    const touche_pointVirgule_point = document.querySelector('.btn_pointVirgule_point');
    const touche_deuxPoints_slashe = document.querySelector('.btn_deuxPoints_slashe');
    const touche_exclamation_modele = document.querySelector('.btn_exclamation_modele');
    
    const touche_espace = document.querySelector('.btn_espace');
    const touche_exposant = document.querySelector('.btn_exposant');
    const touche_enter = document.querySelector('.btn_enter');
    const touche_tabulation = document.querySelector('.btn_tabulation');
    const touche_backspace = document.querySelector('.btn_backspace');

    const touche_uAccent_pourcentage = document.querySelector('.btn_uAccent_pourcentage');
    const touche_asterix_micro = document.querySelector('.btn_asterix_micro');
    const touche_accentCirconflexe_tremat = document.querySelector('.btn_accentCirconflexe_tremat');
    const touche_dollars_livres_symboleMonetaire = document.querySelector('.btn_dollars_livres_symboleMonetaire');
    const touche_esperluette_un = document.querySelector('.btn_esperluette_un');
    const touche_eAccentAigue_deux_tilde = document.querySelector('.btn_eAccentAigue_deux_tilde');
    const touche_doubleQueote_trois_dieze = document.querySelector('.btn_doubleQueote_trois_dieze');
    const touche_simpleQuote_quatre_accolandeOuvrante = document.querySelector('.btn_simpleQuote_quatre_accolandeOuvrante');
    const touche_parentheseOuvante_cinq_crochetOuvrant = document.querySelector('.btn_parentheseOuvante_cinq_crochetOuvrant');
    const touche_tiret_six_barreVerticale = document.querySelector('.btn_tiret_six_barreVerticale');
    const touche_eAccentGrave_sept_backtite = document.querySelector('.btn_eAccentGrave_sept_backtite');
    const touche_underscore_huit_antiSlashe = document.querySelector('.btn_underscore_huit_antiSlashe');
    const touche_cCedille_neuf_chapeauChinois = document.querySelector('.btn_cCedille_neuf_chapeauChinois');
    const touche_aAccent_zero_arobase = document.querySelector(".btn_aAccent_zero_arobase");
    const touche_parentheseFermante_degree_crochetFermant = document.querySelector('.btn_parentheseFermante_degree_crochetFermant');
    const touche_egale_plus_accoladeFermante = document.querySelector('.btn_egale_plus_accoladeFermante');
    
    /**
    * =========================================================================
    *       CONSTANTE DOM / VARIABLES DOM
    * =========================================================================
    **/
    const textarea = document.getElementById('message');
    let pre = document.querySelector('#result pre');
    
    /**
     * =========================================================================
     *       EVENT CLICK AFIN D'ASSIGNER UNE CLASSE AVEC TOGGLE
     *       VERR MAJ A
     * =========================================================================
     **/
    const btn_verr_maj = document.querySelector('.btn_verr_maj');
    btn_verr_maj.addEventListener('click', function() {
        btn_verr_maj.classList.toggle('verr_maj');
    });

    /**
     * =========================================================================
     *       EVENT CLICK AFIN D'ASSIGNER UNE CLASSE AVEC TOGGLE
     *       ALT_GR
     * =========================================================================
     **/
    const btn_alt_gr = document.querySelector('.alt_gr');
    btn_alt_gr.addEventListener("click", function() {
        btn_alt_gr.classList.toggle('btn_alt_gr');
    });

    /**
     * =========================================================================
     *       EVENT CLICK AFIN D'ASSIGNER UNE CLASSE AVEC TOGGLE
     *       SHIFT
     * =========================================================================
     **/
    const btn_shift = document.querySelectorAll('.shift');
    
    btn_shift[0].addEventListener('click', function() {
        this.classList.toggle('btn_shift');
    });        
    
    btn_shift[1].addEventListener('click', function () {
        this.classList.toggle('btn_shift');
    });

    /**
     * =========================================================================
     *       EVENT KEYPRESS
     * =========================================================================
     **/
    textarea.addEventListener('keypress', function (event) {
        textarea.innerHTML += event.key;
        pre.innerHTML = textarea.innerHTML;
    });

    /**
     *  ========================================================================
     *       EVENT CLICK
     * =========================================================================
     **/

    // touche A
    touche_aA.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.a_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.a;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    // Touche Z
    touche_zZ.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.z_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.z;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    // Touche E
    touche_eE.addEventListener("click", function () {
        if (btn_alt_gr.classList.contains('btn_alt_gr') && !btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += ponctuation.euro;
            pre.innerHTML = textarea.innerHTML;
        } else if (btn_verr_maj.classList.contains('verr_maj') && !btn_alt_gr.classList.contains('btn_alt_gr')) {
            textarea.innerHTML += majuscule.e_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj') && !btn_alt_gr.classList.contains('btn_alt_gr')) {
            textarea.innerHTML += minuscule.e;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    // Touche R
    touche_rR.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.r_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.r;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    // Touche T
    touche_tT.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.t_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.t;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    // Touche Y
    touche_yY.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.y_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.y;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    // Touche U
    touche_uU.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.u_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.u;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    // Touche I
    touche_iI.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.i_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.i;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    // Touche O
    touche_oO.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.o_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.o;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    // Touche P
    touche_pP.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.p_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.p;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    // Touche Q
    touche_qQ.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.q_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.q;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    // Touche S
    touche_sS.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.s_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.s;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    // Touche D
    touche_dD.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.d_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.d;
            pre.innerHTML = textarea.innerHTML;
        }});

    // Touche F
    touche_fF.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.f_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.f;
            pre.innerHTML = textarea.innerHTML;
        }});

    // Touche G
    touche_gG.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.g_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.g;
            pre.innerHTML = textarea.innerHTML;
        }});

    // Touche H
    touche_hH.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.h_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.h;
            pre.innerHTML = textarea.innerHTML;
        }});

    // Touche J
    touche_jJ.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.j_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.j;
            pre.innerHTML = textarea.innerHTML;
        }});

    // Touche K
    touche_kK.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.k_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.k;
            pre.innerHTML = textarea.innerHTML;
        }});

    // Touche L
    touche_lL.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.l_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.l;
            pre.innerHTML = textarea.innerHTML;
        }});

    // Touche M
    touche_mM.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.m_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.m;
            pre.innerHTML = textarea.innerHTML;
        }});

    // Touche W
    touche_wW.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.w_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.w;
            pre.innerHTML = textarea.innerHTML;
        }});

    // Touche X
    touche_xX.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.x_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.x;
            pre.innerHTML = textarea.innerHTML;
        }});

    // Touche C
    touche_cC.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.c_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.c;
            pre.innerHTML = textarea.innerHTML;
        }});

    // Touche V
    touche_vV.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.v_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.v;
            pre.innerHTML = textarea.innerHTML;
        }});

    // Touche B
    touche_bB.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.b_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.b;
            pre.innerHTML = textarea.innerHTML;
        }});

    // Touche N
    touche_nN.addEventListener("click", function () {
        if (btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += majuscule.n_maj;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_verr_maj.classList.contains('verr_maj')) {
            textarea.innerHTML += minuscule.n;
            pre.innerHTML = textarea.innerHTML;
        }
    });


    touche_espace.addEventListener("click", function () {
        textarea.innerHTML += ponctuation.espace;
        pre.innerHTML = textarea.innerHTML;
    });
    touche_enter.addEventListener("click", function () {
        textarea.innerHTML += ponctuation.enter;
        pre.innerHTML = textarea.innerHTML;
    });
    touche_exposant.addEventListener("click", function () {
        textarea.innerHTML += ponctuation.exposant;
        pre.innerHTML = textarea.innerHTML;
    });
    touche_tabulation.addEventListener("click", function () {
        textarea.innerHTML += ponctuation.tabulation;
        pre.innerHTML = textarea.innerHTML;
    });
    touche_backspace.addEventListener("click", function () {
        textarea.innerHTML = textarea.innerHTML.substr(0, textarea.innerHTML.length - 1);
        pre.innerHTML = textarea.innerHTML;
    });

    touche_plusGrandQue_plusPetitQue.addEventListener('click', function () {
        if (btn_shift[0].classList.contains('btn_shift') || btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.plus_grand_que;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_shift[0].classList.contains('btn_shift') || !btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.plus_petit_que;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    touche_virgule_interrogation.addEventListener('click', function () {
        if (btn_shift[0].classList.contains('btn_shift') || btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.interrogation;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_shift[0].classList.contains('btn_shift') || !btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.virgule;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    touche_pointVirgule_point.addEventListener('click', function () {
        if (btn_shift[0].classList.contains('btn_shift') || btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.point;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_shift[0].classList.contains('btn_shift') || !btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.point_virgule;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    touche_deuxPoints_slashe.addEventListener('click', function () {
        if (btn_shift[0].classList.contains('btn_shift') || btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.slashe;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_shift[0].classList.contains('btn_shift') || !btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.deux_points;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    touche_exclamation_modele.addEventListener('click', function () {
        if (btn_shift[0].classList.contains('btn_shift') || btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.modele;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_shift[0].classList.contains('btn_shift') || !btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.exclamation;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    touche_uAccent_pourcentage.addEventListener('click', function () {
        if (btn_shift[0].classList.contains('btn_shift') || btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.pourcentage;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_shift[0].classList.contains('btn_shift') || !btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.u_accent;
            pre.innerHTML = textarea.innerHTML;
        }
    });
    touche_asterix_micro.addEventListener('click', function () {
        if (btn_shift[0].classList.contains('btn_shift') || btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.micro;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_shift[0].classList.contains('btn_shift') || !btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.asterix;
            pre.innerHTML = textarea.innerHTML;
        }
    });
    touche_accentCirconflexe_tremat.addEventListener('click', function () {
        if (btn_shift[0].classList.contains('btn_shift') || btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.tremat;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_shift[0].classList.contains('btn_shift') || !btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.accent_circonflexe;
            pre.innerHTML = textarea.innerHTML;
        }
    });
    touche_dollars_livres_symboleMonetaire.addEventListener('click', function () {
        if (btn_alt_gr.classList.contains('btn_alt_gr') && !btn_shift[0].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.symbole_monetaire;
            pre.innerHTML = textarea.innerHTML;
        } else if (btn_shift[0].classList.contains('btn_shift') || btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.livres;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_shift[0].classList.contains('btn_shift') || !btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.dollars;
            pre.innerHTML = textarea.innerHTML;
        } 
    });

    touche_egale_plus_accoladeFermante.addEventListener('click', function () {
        if (btn_alt_gr.classList.contains('btn_alt_gr') && !btn_shift[0].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.accolade_fermante;
            pre.innerHTML = textarea.innerHTML;
        } else if (btn_shift[0].classList.contains('btn_shift') || btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.plus;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_shift[0].classList.contains('btn_shift') || !btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.egale;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    touche_parentheseFermante_degree_crochetFermant.addEventListener('click', function () {
        if (btn_alt_gr.classList.contains('btn_alt_gr') && !btn_shift[0].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.crochet_fermant;
            pre.innerHTML = textarea.innerHTML;
        } else if (btn_shift[0].classList.contains('btn_shift') || btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.degree;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_shift[0].classList.contains('btn_shift') || !btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.parenthese_fermante;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    touche_aAccent_zero_arobase.addEventListener('click', function () {
        if (btn_alt_gr.classList.contains('btn_alt_gr') && !btn_shift[0].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.arobase;
            pre.innerHTML = textarea.innerHTML;
        } else if (btn_shift[0].classList.contains('btn_shift') || btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += numerique.zero;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_shift[0].classList.contains('btn_shift') || !btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.a_accentGrave;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    touche_cCedille_neuf_chapeauChinois.addEventListener('click', function () {
        if (btn_alt_gr.classList.contains('btn_alt_gr') && !btn_shift[0].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.accent_circonflexe;
            pre.innerHTML = textarea.innerHTML;
        } else if (btn_shift[0].classList.contains('btn_shift') || btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += numerique.neuf;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_shift[0].classList.contains('btn_shift') || !btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.c_cedille;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    touche_underscore_huit_antiSlashe.addEventListener('click', function () {
        if (btn_alt_gr.classList.contains('btn_alt_gr') && !btn_shift[0].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.anti_slashe;
            pre.innerHTML = textarea.innerHTML;
        } else if (btn_shift[0].classList.contains('btn_shift') || btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += numerique.huit;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_shift[0].classList.contains('btn_shift') || !btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.underscore;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    touche_eAccentGrave_sept_backtite.addEventListener('click', function () {
        if (btn_alt_gr.classList.contains('btn_alt_gr') && !btn_shift[0].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.backtite;
            pre.innerHTML = textarea.innerHTML;
        } else if (btn_shift[0].classList.contains('btn_shift') || btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += numerique.sept;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_shift[0].classList.contains('btn_shift') || !btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.e_accentGrave;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    touche_tiret_six_barreVerticale.addEventListener('click', function () {
        if (btn_alt_gr.classList.contains('btn_alt_gr') && !btn_shift[0].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.barre_verticale;
            pre.innerHTML = textarea.innerHTML;
        } else if (btn_shift[0].classList.contains('btn_shift') || btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += numerique.six;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_shift[0].classList.contains('btn_shift') || !btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.tiret;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    touche_parentheseOuvante_cinq_crochetOuvrant.addEventListener('click', function () {
        if (btn_alt_gr.classList.contains('btn_alt_gr') && !btn_shift[0].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.crochet_ouvrant;
            pre.innerHTML = textarea.innerHTML;
        } else if (btn_shift[0].classList.contains('btn_shift') || btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += numerique.cinq;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_shift[0].classList.contains('btn_shift') || !btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.parenthese_ouvrante;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    touche_simpleQuote_quatre_accolandeOuvrante.addEventListener('click', function () {
        if (btn_alt_gr.classList.contains('btn_alt_gr') && !btn_shift[0].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.accolade_ouvrante;
            pre.innerHTML = textarea.innerHTML;
        } else if (btn_shift[0].classList.contains('btn_shift') || btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += numerique.quatre;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_shift[0].classList.contains('btn_shift') || !btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.simple_quote;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    touche_doubleQueote_trois_dieze.addEventListener('click', function () {
        if (btn_alt_gr.classList.contains('btn_alt_gr') && !btn_shift[0].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.dieze;
            pre.innerHTML = textarea.innerHTML;
        } else if (btn_shift[0].classList.contains('btn_shift') || btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += numerique.trois;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_shift[0].classList.contains('btn_shift') || !btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.double_quote;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    touche_eAccentAigue_deux_tilde.addEventListener('click', function () {
        if (btn_alt_gr.classList.contains('btn_alt_gr') && !btn_shift[0].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.tilde;
            pre.innerHTML = textarea.innerHTML;
        } else if (btn_shift[0].classList.contains('btn_shift') || btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += numerique.deux;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_shift[0].classList.contains('btn_shift') || !btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.e_accentAigue;
            pre.innerHTML = textarea.innerHTML;
        }
    });

    touche_esperluette_un.addEventListener('click', function () {
        if (btn_shift[0].classList.contains('btn_shift') || btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += numerique.un;
            pre.innerHTML = textarea.innerHTML;
        } else if (!btn_shift[0].classList.contains('btn_shift') || !btn_shift[1].classList.contains('btn_shift')) {
            textarea.innerHTML += ponctuation.esperluette;
            pre.innerHTML = textarea.innerHTML;
        }
    });
});
