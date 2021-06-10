"use-strict";

document.addEventListener('DOMContentLoaded', function() {

    /**
     * =========================================================================
     *       TOUCHES DU CLAVIER
     * =========================================================================
     **/
    const codeTouche = [
        {
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
        {
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
    ]

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
    let pre = document.querySelector('pre');
    
    /**
     * =========================================================================
     *       EVENT CLICK AFIN D'ASSIGNER UNE TOGGLE CLASSE SUR VERR MAJ A
     * =========================================================================
     **/
    const btn_verr_maj = document.querySelector('.btn_verr_maj');
    btn_verr_maj.addEventListener('click', () => {
        btn_verr_maj.classList.toggle('verr_maj_selected');
    });

    /**
     * =========================================================================
     *       EVENT CLICK AFIN D'ASSIGNER UNE TOGGLE CLASSE SUR ALT_GR
     * =========================================================================
     **/
    const btn_alt_gr = document.querySelector('.btn_alt_gr');
    btn_alt_gr.addEventListener("click", () => {
        btn_alt_gr.classList.toggle('alt_gr_selected');
    });

    /**
     * =========================================================================
     *       EVENT CLICK AFIN D'ASSIGNER UNE TOGGLE CLASSE SUR SHIFT
     * =========================================================================
     **/
    const btn_shift = document.querySelectorAll('.btn_shift');
    
    btn_shift[0].addEventListener('click', function() {
        this.classList.toggle("shift_selected");
        if (btn_shift[1].hasAttribute("class")) {
            btn_shift[1].classList.remove("shift_selected");
        }
    });
    
    btn_shift[1].addEventListener('click', function() {
        this.classList.toggle("shift_selected");
        if (btn_shift[0].hasAttribute("class")) {
            btn_shift[0].classList.remove("shift_selected");
        }
    });

    /**
     *  ========================================================================
     *       EVENT CLICK
     * =========================================================================
     **/
    // touche A
    touche_aA.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.a_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.a;
        }
    });

    // Touche Z
    touche_zZ.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.z_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.z;
        }
    });

    // Touche E
    touche_eE.addEventListener("click", () => {
        if (
            btn_alt_gr.classList.contains('alt_gr_selected') &&
            !btn_shift[0].classList.contains('shift_selected') &&
            !btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.euro;
        } else if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected') &&
            !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += majuscule.e_maj;
        } else if (
            (
                !btn_shift[0].classList.contains('shift_selected') ||
                !btn_shift[1].classList.contains('shift_selected') 
            ) && !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += minuscule.e
        }
    });

    // Touche R
    touche_rR.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.r_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.r;
        }
    });

    // Touche T
    touche_tT.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.t_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.t;
        }
    });

    // Touche Y
    touche_yY.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.y_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.y;
        }
    });

    // Touche U
    touche_uU.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.u_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.u;
        }
    });

    // Touche I
    touche_iI.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.i_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.i;
        }
    });

    // Touche O
    touche_oO.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.o_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.o;
        }
    });

    // Touche P
    touche_pP.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.p_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.p
        }
    });

    // Touche Q
    touche_qQ.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.q_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.q;
        }
    });

    // Touche S
    touche_sS.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.s_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.s;
        }
    });

    // Touche D
    touche_dD.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.d_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.d;
        }});

    // Touche F
    touche_fF.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.f_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.f;
        }});

    // Touche G
    touche_gG.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.g_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.g;
        }});

    // Touche H
    touche_hH.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.h_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.h;
        }});

    // Touche J
    touche_jJ.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.j_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.j;
        }});

    // Touche K
    touche_kK.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.k_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.k;
        }});

    // Touche L
    touche_lL.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.l_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.l;
        }});

    // Touche M
    touche_mM.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.m_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.m;
        }});

    // Touche W
    touche_wW.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.w_maj
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.w;
        }});

    // Touche X
    touche_xX.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.x_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.x;
        }});

    // Touche C
    touche_cC.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.c_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.c;
        }});

    // Touche V
    touche_vV.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.v_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.v;
        }});

    // Touche B
    touche_bB.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.b_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.b;
        }});

    // Touche N
    touche_nN.addEventListener("click", () => {
        if (btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += majuscule.n_maj;
        } else if (!btn_verr_maj.classList.contains('verr_maj_selected')) {
            pre.innerHTML += minuscule.n;
        }
    });


    touche_espace.addEventListener("click", () => {
        pre.innerHTML += ponctuation.espace;
    });
    touche_enter.addEventListener("click", () => {
        pre.innerHTML += ponctuation.enter;
    });
    touche_exposant.addEventListener("click", () => {
        pre.innerHTML += ponctuation.exposant;
    });
    touche_tabulation.addEventListener("click", () => {
        pre.innerHTML += ponctuation.tabulation;
    });
    touche_backspace.addEventListener("click", () => {
        pre.innerHTML = pre.innerHTML.substr(0, pre.innerHTML.length - 1);
    });

    touche_plusGrandQue_plusPetitQue.addEventListener('click', () => {
        if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.plus_grand_que;
        } else if (
            !btn_shift[0].classList.contains('shift_selected') ||
            !btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.plus_petit_que;
        }
    });

    touche_virgule_interrogation.addEventListener('click', () => {
        if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.interrogation;
        } else if (
            !btn_shift[0].classList.contains('shift_selected') ||
            !btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.virgule;
        }
    });

    touche_pointVirgule_point.addEventListener('click', () => {
        if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.point;
        } else if (
            !btn_shift[0].classList.contains('shift_selected') ||
            !btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.point_virgule;
        }
    });

    touche_deuxPoints_slashe.addEventListener('click', () => {
        if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.slashe;
        } else if (
            !btn_shift[0].classList.contains('shift_selected') ||
            !btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.deux_points;
        }
    });

    touche_exclamation_modele.addEventListener('click', () => {
        if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.modele;
        } else if (
            !btn_shift[0].classList.contains('shift_selected') ||
            !btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.exclamation;
        }
    });

    touche_uAccent_pourcentage.addEventListener('click', () => {
        if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.pourcentage;
        } else if (
            !btn_shift[0].classList.contains('shift_selected') ||
            !btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.u_accent;
        }
    });

    touche_asterix_micro.addEventListener('click', () => {
        if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.micro;
        } else if (
            !btn_shift[0].classList.contains('shift_selected') ||
            !btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.asterix;
        }
    });

    touche_accentCirconflexe_tremat.addEventListener('click', () => {
        if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.tremat;
        } else if (
            !btn_shift[0].classList.contains('shift_selected') ||
            !btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.accent_circonflexe;
        }
    });

    touche_dollars_livres_symboleMonetaire.addEventListener('click', () => {
        if (
            btn_alt_gr.classList.contains('alt_gr_selected') &&
            !btn_shift[0].classList.contains('shift_selected') &&
            !btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.symbole_monetaire;
        } else if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected') &&
            !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += ponctuation.livres;
        } else if (
            (
                !btn_shift[0].classList.contains('shift_selected') ||
                !btn_shift[1].classList.contains('shift_selected') 
            ) && !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += ponctuation.dollars;
        }
    });

    touche_egale_plus_accoladeFermante.addEventListener('click', () => {
        if (
            btn_alt_gr.classList.contains('alt_gr_selected') &&
            !btn_shift[0].classList.contains('shift_selected') &&
            !btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.accolade_fermante;
        } else if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected') &&
            !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += ponctuation.plus;
        } else if (
            (
                !btn_shift[0].classList.contains('shift_selected') ||
                !btn_shift[1].classList.contains('shift_selected') 
            ) && !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += ponctuation.egale;
        }
    });

    touche_parentheseFermante_degree_crochetFermant.addEventListener('click', () => {
        if (
            btn_alt_gr.classList.contains('alt_gr_selected') &&
            !btn_shift[0].classList.contains('shift_selected') &&
            !btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.crochet_fermant;
        } else if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected') &&
            !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += ponctuation.degree;
        } else if (
            (
                !btn_shift[0].classList.contains('shift_selected') ||
                !btn_shift[1].classList.contains('shift_selected') 
            ) && !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += ponctuation.parenthese_fermante;
        }
    });

    touche_aAccent_zero_arobase.addEventListener('click', () => {
        if (
            btn_alt_gr.classList.contains('alt_gr_selected') &&
            !btn_shift[0].classList.contains('shift_selected') &&
            !btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.arobase;
        } else if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected') &&
            !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += numerique.zero;
        } else if (
            (
                !btn_shift[0].classList.contains('shift_selected') ||
                !btn_shift[1].classList.contains('shift_selected') 
            ) && !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += ponctuation.a_accentGrave;
        }
    });

    touche_cCedille_neuf_chapeauChinois.addEventListener('click', () => {
        if (
            btn_alt_gr.classList.contains('alt_gr_selected') &&
            !btn_shift[0].classList.contains('shift_selected') &&
            !btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.accent_circonflexe;
        } else if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected') &&
            !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += numerique.neuf;
        } else if (
            (
                !btn_shift[0].classList.contains('shift_selected') ||
                !btn_shift[1].classList.contains('shift_selected') 
            ) && !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += ponctuation.c_cedille;
        }
    });

    touche_underscore_huit_antiSlashe.addEventListener('click', () => {
        if (
            btn_alt_gr.classList.contains('alt_gr_selected') &&
            !btn_shift[0].classList.contains('shift_selected') &&
            !btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.anti_slashe;
        } else if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected') &&
            !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += numerique.huit;
        } else if (
            (
                !btn_shift[0].classList.contains('shift_selected') ||
                !btn_shift[1].classList.contains('shift_selected') 
            ) && !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += ponctuation.underscore;
        }
    });

    touche_eAccentGrave_sept_backtite.addEventListener('click', () => {
        if (
            btn_alt_gr.classList.contains('alt_gr_selected') &&
            !btn_shift[0].classList.contains('shift_selected') &&
            !btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.backtite;
        } else if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected') &&
            !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += numerique.sept;
        } else if (
            (
                !btn_shift[0].classList.contains('shift_selected') ||
                !btn_shift[1].classList.contains('shift_selected') 
            ) && !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += ponctuation.e_accentGrave;
        }
    });

    touche_tiret_six_barreVerticale.addEventListener('click', () => {
        if (
            btn_alt_gr.classList.contains('alt_gr_selected') &&
            !btn_shift[0].classList.contains('shift_selected') &&
            !btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.barre_verticale;
        } else if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected') &&
            !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += numerique.six;
        } else if (
            (
                !btn_shift[0].classList.contains('shift_selected') ||
                !btn_shift[1].classList.contains('shift_selected') 
            ) && !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += ponctuation.tiret;
        }
    });

    touche_parentheseOuvante_cinq_crochetOuvrant.addEventListener('click', () => {
        if (
            btn_alt_gr.classList.contains('alt_gr_selected') &&
            !btn_shift[0].classList.contains('shift_selected') &&
            !btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.crochet_ouvrant;
        } else if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected') &&
            !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += numerique.cinq;
        } else if (
            (
                !btn_shift[0].classList.contains('shift_selected') ||
                !btn_shift[1].classList.contains('shift_selected') 
            ) && !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += ponctuation.parenthese_ouvrante;
        }
    });

    touche_simpleQuote_quatre_accolandeOuvrante.addEventListener('click', () => {
        if (
            btn_alt_gr.classList.contains('alt_gr_selected') &&
            !btn_shift[0].classList.contains('shift_selected') &&
            !btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.accolade_ouvrante;
        } else if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected') &&
            !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += numerique.quatre;
        } else if (
            (
                !btn_shift[0].classList.contains('shift_selected') ||
                !btn_shift[1].classList.contains('shift_selected') 
            ) && !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += ponctuation.simple_quote;
        }
    });

    touche_doubleQueote_trois_dieze.addEventListener('click', () => {
        if (
            btn_alt_gr.classList.contains('alt_gr_selected') &&
            !btn_shift[0].classList.contains('shift_selected') &&
            !btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.dieze;
        } else if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected') &&
            !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += numerique.trois;
        } else if (
            (
                !btn_shift[0].classList.contains('shift_selected') ||
                !btn_shift[1].classList.contains('shift_selected') 
            ) && !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += ponctuation.double_quote;
        }
    });

    touche_eAccentAigue_deux_tilde.addEventListener('click', () => {
        if (
            btn_alt_gr.classList.contains('alt_gr_selected') &&
            !btn_shift[0].classList.contains('shift_selected') &&
            !btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += ponctuation.tilde;
        } else if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected') &&
            !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += numerique.deux;
        } else if (
            (
                !btn_shift[0].classList.contains('shift_selected') ||
                !btn_shift[1].classList.contains('shift_selected') 
            ) && !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += ponctuation.e_accentAigue;
        }
    });

    touche_esperluette_un.addEventListener('click', () => {
        if (
            btn_shift[0].classList.contains('shift_selected') ||
            btn_shift[1].classList.contains('shift_selected')
        ) {
            pre.innerHTML += numerique.un;
        } else if (
            (
                !btn_shift[0].classList.contains('shift_selected') ||
                !btn_shift[1].classList.contains('shift_selected') 
            ) && !btn_alt_gr.classList.contains('alt_gr_selected')
        ) {
            pre.innerHTML += ponctuation.esperluette;
        }
    });
});


const btnReset = document.querySelector("#reset");
btnReset.addEventListener("click", (event) => {
    event.preventDefault();

    const preReset = document.querySelector("#pre");

    preReset.innerHTML = "";
})