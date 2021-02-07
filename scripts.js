window.onload = function() {
    document.getElementById("fv-desc").style.display = "none";
    document.getElementById("pv-desc").style.display = "none";
};

// 将来価値を求める
function fv() {
    var pv = document.getElementById("pv");
    var yield = document.getElementById("f-yield");
    var years = document.getElementById("f-years");

    // 空白チェック
    if (pv.value == "" || yield.value == "" || years.value == "") {
        alert("値を入力してください。");
        return;
    };

    pv = Number(pv.value);
    yield = Number(yield.value);
    years = Number(years.value);

    var fv = pv * (1 + yield / 100) ** years;

    document.getElementById("pv-for-fv").innerHTML = pv.toLocaleString();
    document.getElementById("p-years-ans").innerHTML = years.toLocaleString();
    document.getElementById("fv-ans").innerHTML = (Math.floor(fv)).toLocaleString();
    document.getElementById("fv-desc").style.display = "block";
};

// 現在価値を求める
function pv() {
    var fv = document.getElementById("fv");
    var yield = document.getElementById("p-yield");
    var years = document.getElementById("p-years");

    // 空白チェック
    if (fv.value == "" || yield.value == "" || years.value == "") {
        alert("値を入力してください。");
        return;
    };

    fv = Number(fv.value);
    yield = Number(yield.value);
    years = Number(years.value);

    var pv = fv / (1 + yield / 100) ** years;

    document.getElementById("fv-for-pv").innerHTML = fv.toLocaleString();
    document.getElementById("f-years-ans").innerHTML = years.toLocaleString();
    document.getElementById("pv-ans").innerHTML = (Math.floor(pv)).toLocaleString();
    document.getElementById("pv-desc").style.display = "block"
};
