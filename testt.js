document.addEventListener("DOMContentLoaded", function () {

    // HTML elemek megkeresése
    const magassagMezo = document.getElementById("magassag");
    const testsulyMezo = document.getElementById("testsuly");
    const szamitasGomb = document.getElementById("szamitasGomb");
    const eredmeny = document.getElementById("eredmeny");


    // Gomb megnyomása
    szamitasGomb.addEventListener("click", function () {

        // Beírt értékek
        const magassag = Number(magassagMezo.value);
        const testsuly = Number(testsulyMezo.value);


        // Ellenőrzés
        if (
            magassagMezo.value === "" ||
            testsulyMezo.value === "" ||
            !Number.isFinite(magassag) ||
            !Number.isFinite(testsuly) ||
            magassag < 0 ||
            testsuly < 0
        ) {

            eredmeny.innerHTML =
                '<p class="hiba">A testsúly és a magasság nem lehet kevesebb mint nulla!</p>';

            return;
        }

        if (magassag === 0) {
            eredmeny.innerHTML = '<p class="hiba">A magasságnak nullánál nagyobbnak kell lennie a számításhoz.</p>';
            return;
        }


        // Centiméterből méter
        const magassagMeter = magassag / 100;


        // BMI kiszámítása
        const bmi = testsuly / (magassagMeter * magassagMeter);


        // Kategória
        let kategoria;


        if (bmi < 16) {

            kategoria = "Súlyos soványság";

        } else if (bmi < 17) {

            kategoria = "Mérsékelt soványság";

        } else if (bmi < 18.5) {

            kategoria = "Enyhe soványság";

        } else if (bmi < 25) {

            kategoria = "Normál testsúly";

        } else if (bmi < 30) {

            kategoria = "Túlsúlyos";

        } else if (bmi < 35) {

            kategoria = "Elhízott (I. fokú)";

        } else if (bmi < 40) {

            kategoria = "Elhízott (II. fokú)";

        } else {

            kategoria = "Súlyosan elhízott (III. fokú)";
        }


        // Eredmény megjelenítése
        eredmeny.innerHTML =
            "Az állapotod: " + kategoria +
            "<br>" +
            "(BMI: " + bmi.toFixed(1) + ")";
    });


    // Enter billentyűvel is lehessen számolni
    magassagMezo.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            szamitasGomb.click();
        }

    });


    testsulyMezo.addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            szamitasGomb.click();
        }

    });

});
