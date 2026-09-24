const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#kotak");
const luckyButton = document.querySelector("#luckyButton");
const result = document.querySelector("#Hasil");

function tampilkanHasil(pesan) {
  result.textContent = pesan;
}

function cari() {
  const kataKunci = searchInput.value.trim();

  if (kataKunci === "") {
    tampilkanHasil("Silakan masukkan kata yang ingin dicari.");
    searchInput.focus();
    return;
  }

  tampilkanHasil(`Hasil pencarian untuk: ${kataKunci}`);
}

function beruntung() {
  const kataKunci = searchInput.value.trim();

  if (kataKunci === "") {
    tampilkanHasil("Tuliskan kata kunci terlebih dahulu.");
    searchInput.focus();
    return;
  }

  tampilkanHasil(`Semoga beruntung menemukan: ${kataKunci}!`);
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  cari();
});

luckyButton.addEventListener("click", beruntung);
