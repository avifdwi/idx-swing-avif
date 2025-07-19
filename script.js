
document.addEventListener("DOMContentLoaded", function () {
    const data = [
        ["ENRG", "Energi Mega", "Energi", "✅", "✅", "✅", "Bullish", "45", "✅", "✅"],
        ["PGAS", "Perusahaan Gas", "Energi", "✅", "✅", "❌", "Cross", "52", "❌", "❌"],
        ["MEDC", "Medco Energi", "Energi", "❌", "❌", "❌", "Bearish", "38", "✅", "❌"],
        ["ELSA", "Elnusa Tbk", "Energi", "✅", "✅", "✅", "Bullish", "60", "✅", "✅"],
        ["BSSR", "Baramulti", "Energi", "❌", "✅", "✅", "Flat", "50", "❌", "❌"]
    ];
    const tbody = document.getElementById("saham-table-body");
    data.forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(cell => {
            const td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });
        tbody.appendChild(tr);
    });
});
