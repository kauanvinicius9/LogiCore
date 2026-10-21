const mockCategories = [ "Peças Mecânicas", "Componentes Eletrônicos", "EPIs", "Ferramentas", "Matéria-Prima", "Químicos" ];
const mockPlants = [ { code: "SP", name: "Planta SP - Matriz" }, { code: "RJ", name: "Planta RJ - Fabril" }, { code: "MG", name: "Planta MG - Logística" }, { code: "RS", name: "Planta RS - Sul" } ];

let materialsDatabase = [
  {
    id: "SKU-1001",
    code: "SKU-1001",
    description: "Rolamento de Esferas Blindado 6204-2RSH SKF",
    category: "Peças Mecânicas",
    unit: "UN",
    manufacturer: "SKF Bearings",
    mainPlant: "SP",
    location: { aisle: "A-04", shelf: "02", bin: "12" },
    stockByPlant: { SP: { physical: 120, reserved: 20, minPoint: 30 }, RJ: { physical: 45, reserved: 5, minPoint: 25 }, MG: { physical: 80, reserved: 0, minPoint: 20 }, RS: { physical: 15, reserved: 10, minPoint: 20 }},
    historyTrends: [180, 210, 195, 230, 240, 225],
    movements: [
      {
        date: "2026-10-20 14:32",
        type: "Entrada",
        qty: 50,
        plant: "SP",
        user: "Aush Huse",
        notes: "NF #89201 - Fornecedor SKF",
      },
      {
        date: "2026-10-18 09:15",
        type: "Saída",
        qty: 10,
        plant: "SP",
        user: "Scott Poend",
        notes: "OM-4022 Manutenção Preventiva Line 1",
      },
      {
        date: "2026-10-10 11:00",
        type: "Transferência",
        qty: 15,
        plant: "RJ",
        user: "Dels Judjs",
        notes: "Transferência para Filial RJ",
      },
    ],
  },
  {
    id: "SKU-1002",
    code: "SKU-1002",
    description: "Sensor de Proximidade Indutivo M12 PNP NO 24V",
    category: "Componentes Eletrônicos",
    unit: "UN",
    manufacturer: "Balluff",
    mainPlant: "RJ",
    location: { aisle: "E-01", shelf: "04", bin: "05" },
    stockByPlant: { SP: { physical: 12, reserved: 2, minPoint: 15 }, RJ: { physical: 8, reserved: 6, minPoint: 20 }, MG: { physical: 0, reserved: 0, minPoint: 10 }, RS: { physical: 5, reserved: 0, minPoint: 5 }},
    historyTrends: [40, 35, 30, 25, 20, 19],
    movements: [
      {
        date: "2026-10-19 16:20",
        type: "Saída",
        qty: 4,
        plant: "RJ",
        user: "Pend Unws",
        notes: "Substituição emergencial Prensa P-03",
      },
      {
        date: "2026-10-12 08:45",
        type: "Reserva",
        qty: 6,
        plant: "RJ",
        user: "Ausn Wusd",
        notes: "Reserva para projeto de automação",
      },
    ],
  },
  {
    id: "SKU-1003",
    code: "SKU-1003",
    description: "Luva de Proteção Nitrílica Antiderrapante Tam G",
    category: "EPIs",
    unit: "PAR",
    manufacturer: "Ansell",
    mainPlant: "SP",
    location: { aisle: "C-12", shelf: "01", bin: "01" },
    stockByPlant: { SP: { physical: 450, reserved: 50, minPoint: 100 }, RJ: { physical: 300, reserved: 20, minPoint: 80 }, MG: { physical: 250, reserved: 10, minPoint: 50 }, RS: { physical: 180, reserved: 0, minPoint: 50 }},
    historyTrends: [1200, 1150, 1100, 1050, 1000, 1110],
    movements: [
      {
        date: "2026-10-21 08:00",
        type: "Entrada",
        qty: 200,
        plant: "SP",
        user: "Almoxarifado Central",
        notes: "Lote Mensal EPI",
      },
      {
        date: "2026-10-15 13:40",
        type: "Saída",
        qty: 50,
        plant: "MG",
        user: "Rande Stief",
        notes: "Distribuição Trimestral Logística",
      },
    ],
  },
  {
    id: "SKU-1004",
    code: "SKU-1004",
    description: "Chave de Fenda Cruzada (Phillips) 1/4 x 6 polegadas",
    category: "Ferramentas",
    unit: "UN",
    manufacturer: "Gedore",
    mainPlant: "MG",
    location: { aisle: "F-02", shelf: "03", bin: "18" },
    stockByPlant: { SP: { physical: 18, reserved: 0, minPoint: 10 }, RJ: { physical: 12, reserved: 0, minPoint: 10 }, MG: { physical: 35, reserved: 5, minPoint: 15 }, RS: { physical: 8, reserved: 0, minPoint: 5 }},
    historyTrends: [75, 72, 70, 73, 73, 68],
    movements: [
      {
        date: "2026-09-28 10:11",
        type: "Entrada",
        qty: 20,
        plant: "MG",
        user: "Till Schnider",
        notes: "Reposição de kit ferramental",
      },
    ],
  },
  {
    id: "SKU-1005",
    code: "SKU-1005",
    description: "Chapa de Aço Inoxidável 304 2000x1000x3mm",
    category: "Matéria-Prima",
    unit: "Chapa",
    manufacturer: "Aperam South America",
    mainPlant: "SP",
    location: { aisle: "PATIO-01", shelf: "A", bin: "01" },
    stockByPlant: { SP: { physical: 0, reserved: 0, minPoint: 15 }, RJ: { physical: 2, reserved: 2, minPoint: 10 }, MG: { physical: 0, reserved: 0, minPoint: 5 }, RS: { physical: 0, reserved: 0, minPoint: 5 }},
    historyTrends: [45, 30, 20, 10, 5, 0],
    movements: [
      {
        date: "2026-10-17 15:30",
        type: "Saída",
        qty: 15,
        plant: "SP",
        user: "Lindmann Ramse",
        notes: "Consumo Ordem Produção #781",
      },
      {
        date: "2026-10-11 11:20",
        type: "Ajuste",
        qty: -2,
        plant: "RJ",
        user: "Inventário Geral",
        notes: "Ajuste de avaria detectada",
      },
    ],
  },
  {
    id: "SKU-1006",
    code: "SKU-1006",
    description: "Óleo Lubrificante Industrial ISO VG 68 (Tambor 200L)",
    category: "Químicos",
    unit: "L",
    manufacturer: "Mobil Lubricants",
    mainPlant: "RJ",
    location: { aisle: "Q-01", shelf: "01", bin: "02" },
    stockByPlant: { SP: { physical: 600, reserved: 200, minPoint: 400 }, RJ: { physical: 1200, reserved: 100, minPoint: 600 }, MG: { physical: 400, reserved: 0, minPoint: 200 }, RS: { physical: 200, reserved: 0, minPoint: 200 }},
    historyTrends: [2200, 2300, 2100, 2400, 2350, 2100],
    movements: [
      {
        date: "2026-10-19 14:10",
        type: "Entrada",
        qty: 400,
        plant: "RJ",
        user: "Fornecedor Direct",
        notes: "Entrega programada",
      },
    ],
  },
  {
    id: "SKU-1007",
    code: "SKU-1007",
    description: "Inversor de Frequência PowerFlex 525 7.5kW 400V",
    category: "Componentes Eletrônicos",
    unit: "UN",
    manufacturer: "Rockwell Automation",
    mainPlant: "SP",
    location: { aisle: "E-03", shelf: "02", bin: "08" },
    stockByPlant: { SP: { physical: 5, reserved: 1, minPoint: 4 }, RJ: { physical: 3, reserved: 0, minPoint: 2 }, MG: { physical: 2, reserved: 0, minPoint: 2 }, RS: { physical: 1, reserved: 0, minPoint: 1 }},
    historyTrends: [12, 11, 10, 10, 9, 10],
    movements: [
      {
        date: "2026-10-05 16:45",
        type: "Saída",
        qty: 1,
        plant: "SP",
        user: "Mary Navh",
        notes: "Troca por queima na extrusora 2",
      },
    ],
  },
  {
    id: "SKU-1008",
    code: "SKU-1008",
    description: "Válvula Solenóide 5/2 Vias 24VDC 1/4 BSP",
    category: "Peças Mecânicas",
    unit: "UN",
    manufacturer: "Festo Pneumatics",
    mainPlant: "RS",
    location: { aisle: "B-02", shelf: "05", bin: "14" },
    stockByPlant: { SP: { physical: 25, reserved: 0, minPoint: 15 }, RJ: { physical: 18, reserved: 2, minPoint: 10 }, MG: { physical: 10, reserved: 0, minPoint: 10 }, RS: { physical: 42, reserved: 5, minPoint: 15 }},
    historyTrends: [80, 85, 90, 88, 92, 90],
    movements: [
      {
        date: "2026-10-14 09:30",
        type: "Transferência",
        qty: 10,
        plant: "RS",
        user: "Kush Stutt",
        notes: "Apoio a parada de manutenção RS",
      },
    ],
  },
  {
    id: "SKU-1009",
    code: "SKU-1009",
    description: "Óculos de Segurança Policarbonato Incolor Anti-risco",
    category: "EPIs",
    unit: "UN",
    manufacturer: "3M",
    mainPlant: "SP",
    location: { aisle: "C-10", shelf: "02", bin: "04" },
    stockByPlant: { SP: { physical: 320, reserved: 10, minPoint: 100 }, RJ: { physical: 150, reserved: 0, minPoint: 80 }, MG: { physical: 90, reserved: 0, minPoint: 50 }, RS: { physical: 110, reserved: 0, minPoint: 50 }},
    historyTrends: [600, 620, 650, 670, 640, 660],
    movements: [
      {
        date: "2026-10-18 11:25",
        type: "Entrada",
        qty: 100,
        plant: "SP",
        user: "Almoxarifado Central",
        notes: "Reposição de Estoque",
      },
    ],
  },
  {
    id: "SKU-1010",
    code: "SKU-1010",
    description: "Multímetro Digital Automotivo e Industrial True RMS",
    category: "Ferramentas",
    unit: "UN",
    manufacturer: "Fluke",
    mainPlant: "SP",
    location: { aisle: "F-01", shelf: "01", bin: "02" },
    stockByPlant: { SP: { physical: 6, reserved: 1, minPoint: 5 }, RJ: { physical: 4, reserved: 0, minPoint: 3 }, MG: { physical: 3, reserved: 0, minPoint: 3 }, RS: { physical: 2, reserved: 0, minPoint: 2 }},
    historyTrends: [15, 15, 15, 14, 15, 14],
    movements: [
      {
        date: "2026-09-12 14:00",
        type: "Saída",
        qty: 1,
        plant: "SP",
        user: "Lab Calibração",
        notes: "Envio para aferição externa",
      },
    ],
  },
  {
    id: "SKU-1011",
    code: "SKU-1011",
    description: "Solvente Desengraxante Biodegradável Industrial (Galao 20L)",
    category: "Químicos",
    unit: "L",
    manufacturer: "Quimatic Tapmatic",
    mainPlant: "MG",
    location: { aisle: "Q-03", shelf: "01", bin: "01" },
    stockByPlant: { SP: { physical: 80, reserved: 0, minPoint: 100 }, RJ: { physical: 40, reserved: 10, minPoint: 60 }, MG: { physical: 120, reserved: 0, minPoint: 100 }, RS: { physical: 20, reserved: 0, minPoint: 40 }},
    historyTrends: [350, 320, 290, 280, 260, 240],
    movements: [
      {
        date: "2026-10-02 08:30",
        type: "Saída",
        qty: 40,
        plant: "MG",
        user: "Limpeza Técnica",
        notes: "Higienização periódica tanques",
      },
    ],
  },
  {
    id: "SKU-1012",
    code: "SKU-1012",
    description: "Correia Dentada Sincronizadora HTD 8M-1200 Largura 30mm",
    category: "Peças Mecânicas",
    unit: "UN",
    manufacturer: "Gates Belts",
    mainPlant: "RJ",
    location: { aisle: "A-08", shelf: "03", bin: "22" },
    stockByPlant: { SP: { physical: 22, reserved: 0, minPoint: 15 }, RJ: { physical: 35, reserved: 5, minPoint: 20 }, MG: { physical: 14, reserved: 0, minPoint: 10 }, RS: { physical: 9, reserved: 0, minPoint: 10 }},
    historyTrends: [85, 82, 80, 78, 80, 75],
    movements: [
      {
        date: "2026-10-13 13:10",
        type: "Entrada",
        qty: 15,
        plant: "RJ",
        user: "Lucia Santos",
        notes: "Ordem de compra atendida",
      },
    ],
  },
  {
    id: "SKU-1013",
    code: "SKU-1013",
    description: "Cabo de Cobre Flexível 2.5mm² 750V Azul (Rolo 100m)",
    category: "Componentes Eletrônicos",
    unit: "M",
    manufacturer: "Prysmian Group",
    mainPlant: "SP",
    location: { aisle: "E-08", shelf: "01", bin: "01" },
    stockByPlant: { SP: { physical: 1500, reserved: 300, minPoint: 500 }, RJ: { physical: 800, reserved: 100, minPoint: 400 }, MG: { physical: 600, reserved: 0, minPoint: 300 }, RS: { physical: 400, reserved: 0, minPoint: 300 }},
    historyTrends: [3800, 3600, 3500, 3400, 3300, 3300],
    movements: [
      {
        date: "2026-10-16 10:00",
        type: "Saída",
        qty: 200,
        plant: "SP",
        user: "Instalações Elétricas",
        notes: "Reforma subestação",
      },
    ],
  },
  {
    id: "SKU-1014",
    code: "SKU-1014",
    description: "Capacete de Segurança com Jugular Azul Aba Frontal",
    category: "EPIs",
    unit: "UN",
    manufacturer: "MSA Safety",
    mainPlant: "RS",
    location: { aisle: "C-01", shelf: "03", bin: "02" },
    stockByPlant: { SP: { physical: 45, reserved: 0, minPoint: 30 }, RJ: { physical: 30, reserved: 0, minPoint: 20 }, MG: { physical: 25, reserved: 0, minPoint: 20 }, RS: { physical: 85, reserved: 10, minPoint: 30 }},
    historyTrends: [180, 185, 190, 185, 180, 185],
    movements: [
      {
        date: "2026-09-30 15:00",
        type: "Entrada",
        qty: 50,
        plant: "RS",
        user: "Suprimentos Sul",
        notes: "Integração novos colaboradores",
      },
    ],
  },
  {
    id: "SKU-1015",
    code: "SKU-1015",
    description: "Disco de Corte Diamantado 4.5 polegadas para Inox/Metal",
    category: "Ferramentas",
    unit: "UN",
    manufacturer: "Norton Abrasivos",
    mainPlant: "SP",
    location: { aisle: "F-06", shelf: "02", bin: "11" },
    stockByPlant: { SP: { physical: 280, reserved: 40, minPoint: 100 }, RJ: { physical: 140, reserved: 20, minPoint: 80 }, MG: { physical: 110, reserved: 0, minPoint: 50 }, RS: { physical: 95, reserved: 0, minPoint: 50 }},
    historyTrends: [650, 640, 630, 620, 610, 625],
    movements: [
      {
        date: "2026-10-11 14:22",
        type: "Saída",
        qty: 30,
        plant: "SP",
        user: "Caldeiraria Central",
        notes: "Corte de estruturas",
      },
    ],
  },
];

const MockAPI = {
  delay: 320,
  async fetchMaterials(params = {}) {
    return new Promise((resolve) => {
      setTimeout(() => {
        let result = [...materialsDatabase];

        if (params.search && params.search.trim() !== "") {
          const query = params.search.toLowerCase().trim();

          result = result.filter(
            (item) => item.code.toLowerCase().includes(query) || item.description.toLowerCase().includes(query),
          );
        }

        if (params.plant && params.plant !== "ALL") {
          result = result.filter((item) => {
            const plantData = item.stockByPlant[params.plant];
            return (plantData && (plantData.physical > 0 || item.mainPlant === params.plant)
            );
          });
        }

        if (params.category && params.category !== "ALL") {
          result = result.filter((item) => item.category === params.category);
        }

        if (params.status && params.status !== "ALL") {
          result = result.filter((item) => {
            const status = MockAPI.getMaterialStatus(item);
            return status.code === params.status;
          });
        }

        const stats = {
          total: materialsDatabase.length,
          regular: materialsDatabase.filter((m) => MockAPI.getMaterialStatus(m).code === "in_stock").length,
          low: materialsDatabase.filter((m) => MockAPI.getMaterialStatus(m).code === "low_stock").length,
          critical: materialsDatabase.filter((m) => MockAPI.getMaterialStatus(m).code === "out_of_stock").length,
        };

        const page = params.page || 1;
        const limit = params.limit || 10;
        const totalFiltered = result.length;
        const totalPages = Math.ceil(totalFiltered / limit) || 1;
        const startIndex = (page - 1) * limit;
        const paginatedData = result.slice(startIndex, startIndex + limit);

        resolve({
          data: paginatedData,
          pagination: { currentPage: page, itemsPerPage: limit, totalItems: totalFiltered, totalPages: totalPages, startIndex: totalFiltered > 0 ? startIndex + 1 : 0, endIndex: Math.min(startIndex + limit, totalFiltered)},
          stats: stats,
        });
      }, MockAPI.delay);
    });
  },

  async getMaterialById(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const item = materialsDatabase.find((m) => m.id === id);
        
        if (item) {
          resolve({ ...item });
        } else {
          reject(new Error("Material não encontrado"));
        }
      }, MockAPI.delay);
    });
  },

  async addMovement(movementData) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const item = materialsDatabase.find(
          (m) => m.id === movementData.materialId,
        );

        if (!item) {
          reject(new Error("Material não encontrado"));
          return;
        }

        const plant = movementData.plant;
        const qty = parseInt(movementData.quantity);
        const type = movementData.type;

        if (!item.stockByPlant[plant]) {
          item.stockByPlant[plant] = { physical: 0, reserved: 0, minPoint: 10 };
        }

        const plantStock = item.stockByPlant[plant];

        if (type === "Entrada") {
          plantStock.physical += qty;
        } else if (type === "Saída") {
          plantStock.physical = Math.max(0, plantStock.physical - qty);
        } else if (type === "Reserva") {
          plantStock.reserved += qty;
        } else if (type === "Ajuste") {
          plantStock.physical = qty;
        } else if (type === "Transferência") {
          plantStock.physical = Math.max(0, plantStock.physical - qty);
        }

        const now = new Date();
        const dateFormatted = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;

        item.movements.unshift({ date: dateFormatted, type: type, qty: qty, plant: plant, user: movementData.user || "Operador Logístico", notes: movementData.notes || "Movimentação manual via sistema"});

        const currentTotal = MockAPI.calculateTotalAvailable(item);
        item.historyTrends[item.historyTrends.length - 1] = currentTotal;

        resolve({ success: true, updatedMaterial: item });
      }, MockAPI.delay);
    });
  },

  calculateTotalAvailable(item) {
    let total = 0;
    Object.values(item.stockByPlant).forEach((p) => { total += p.physical - p.reserved });
    return Math.max(0, total);
  },

  getMaterialStatus(item) {
    let totalPhysical = 0;
    let totalMin = 0;

    Object.values(item.stockByPlant).forEach((p) => { totalPhysical += p.physical; totalMin += p.minPoint });

    if (totalPhysical <= 0) {
      return { label: "Sem Estoque", code: "out_of_stock", badgeClass: "bg-rose-100 text-rose-800 border-rose-200" };

    } else if (totalPhysical <= totalMin) {
      return { label: "Est. Baixo", code: "low_stock", badgeClass: "bg-amber-100 text-amber-800 border-amber-200" };

    } else {
      return { label: "Estoque", code: "in_stock", badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-200" };
    }
  },
};

let currentState = { search: "", plant: "ALL", category: "ALL", status: "ALL", page: 1, limit: 10, viewMode: "table" };
let currentSelectedMaterialId = null;
let activeHistoryFilter = "ALL";
let stockChartInstance = null;
let searchDebounceTimeout = null;

window.onload = function () { loadMaterialsData()};

async function loadMaterialsData() {
  showLoading(true);

  try {
    const response = await MockAPI.fetchMaterials(currentState);
    renderKPIs(response.stats);
    renderMaterialsList(response.data);
    renderPagination(response.pagination);
    updateActiveFiltersBadge();

  } catch (error) {
    showToast(
      "Erro ao carregar dados",
      "Não foi possível buscar a lista de materiais.",
      "error",
    );

  } finally {
    showLoading(false);
  }
}

function handleSearchInput() {
  const inputVal = document.getElementById("searchInput").value;
  document.getElementById("btnClearSearch").classList.toggle("hidden", inputVal === "");
  clearTimeout(searchDebounceTimeout);
  searchDebounceTimeout = setTimeout(() => {
    currentState.search = inputVal;
    currentState.page = 1;
    loadMaterialsData();
  }, 300);
}

function clearSearchText() {
  document.getElementById("searchInput").value = "";
  document.getElementById("btnClearSearch").classList.add("hidden");
  currentState.search = "";
  currentState.page = 1;
  loadMaterialsData();
}

function applyFilters() {
  currentState.plant = document.getElementById("filterPlant").value;
  currentState.category = document.getElementById("filterCategory").value;
  currentState.status = document.getElementById("filterStatus").value;
  currentState.page = 1;
  loadMaterialsData();
}

function resetAllFilters() {
  document.getElementById("searchInput").value = "";
  document.getElementById("btnClearSearch").classList.add("hidden");
  document.getElementById("filterPlant").value = "ALL";
  document.getElementById("filterCategory").value = "ALL";
  document.getElementById("filterStatus").value = "ALL";

  currentState = { search: "", plant: "ALL", category: "ALL", status: "ALL", page: 1, limit: currentState.limit, viewMode: currentState.viewMode};

  loadMaterialsData();
}

function setViewMode(mode) {
  currentState.viewMode = mode;
  const btnTable = document.getElementById("btnViewTable");
  const btnGrid = document.getElementById("btnViewGrid");

  if (mode === "table") {
    btnTable.className = "p-2 rounded-md text-sm font-medium transition text-blue-600 bg-white shadow-xs";
    btnGrid.className = "p-2 rounded-md text-sm font-medium transition text-slate-600 hover:text-slate-900";
  } else {
    btnGrid.className ="p-2 rounded-md text-sm font-medium transition text-blue-600 bg-white shadow-xs";
    btnTable.className ="p-2 rounded-md text-sm font-medium transition text-slate-600 hover:text-slate-900";
  }
  loadMaterialsData();
}

function prevPage() {
  if (currentState.page > 1) {
    currentState.page--;
    loadMaterialsData();
  }
}

function nextPage() {
  currentState.page++;
  loadMaterialsData();
}

function changeItemsPerPage() {
  currentState.limit = parseInt(document.getElementById("itemsPerPage").value);
  currentState.page = 1;
  loadMaterialsData();
}

function renderKPIs(stats) {
  document.getElementById("statTotalSKUs").innerText = stats.total;
  document.getElementById("statRegular").innerText = stats.regular;
  document.getElementById("statLow").innerText = stats.low;
  document.getElementById("statCritical").innerText = stats.critical;
}

function renderMaterialsList(materials) {
  const tableContainer = document.getElementById("tableViewContainer");
  const gridContainer = document.getElementById("gridViewContainer");
  const emptyState = document.getElementById("emptyState");

  if (materials.length === 0) {
    tableContainer.classList.add("hidden");
    gridContainer.classList.add("hidden");
    emptyState.classList.remove("hidden");
    return;
  }

  emptyState.classList.add("hidden");

  if (currentState.viewMode === "table") {
    gridContainer.classList.add("hidden");
    tableContainer.classList.remove("hidden");

    const tbody = document.getElementById("materialsTableBody");
    tbody.innerHTML = materials
      .map((item) => {
        const status = MockAPI.getMaterialStatus(item);
        const totalAvailable = MockAPI.calculateTotalAvailable(item);

        return `
                        <tr class="hover:bg-slate-50 transition border-b border-slate-100">
                            <td class="py-3 px-4 font-bold text-slate-900 font-mono">${item.code}</td>
                            <td class="py-3 px-4">
                                <p class="font-medium text-slate-800">${item.description}</p>
                                <p class="text-xs text-slate-400">Fab: ${item.manufacturer}</p>
                            </td>

                            <td class="py-3 px-4">
                                <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                                    ${item.category}
                                </span>
                            </td>

                            <td class="py-3 px-4 text-xs font-semibold text-slate-600">Planta ${item.mainPlant}</td>
                            <td class="py-3 px-4 text-right">
                                <span class="font-bold text-slate-900 text-base">${totalAvailable}</span>
                                <span class="text-xs text-slate-500 ml-0.5">${item.unit}</span>
                            </td>

                            <td class="py-3 px-4 text-center">
                                <span class="px-2.5 py-1 rounded-full text-xs font-semibold border ${status.badgeClass}">
                                    ${status.label}
                                </span>
                            </td>

                            <td class="py-3 px-4 text-center">
                                <button onclick="openDetailModal('${item.id}')" class="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-1.5 rounded-lg font-medium transition border border-blue-200">
                                    <i class="fa-solid fa-eye"></i> Detalhes
                                </button>
                            </td>
                        </tr>
                    `;
      })
      .join("");

  } else {
    tableContainer.classList.add("hidden");
    gridContainer.classList.remove("hidden");

    gridContainer.innerHTML = materials
      .map((item) => {
        const status = MockAPI.getMaterialStatus(item);
        const totalAvailable = MockAPI.calculateTotalAvailable(item);

        return `
                        <div class="bg-white rounded-xl border border-slate-200 shadow-xs p-4 flex flex-col justify-between hover:shadow-md transition">
                            <div>
                                <div class="flex items-center justify-between mb-2">
                                    <span class="font-mono text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">${item.code}</span>
                                    <span class="px-2 py-0.5 rounded-full text-[11px] font-semibold border ${status.badgeClass}">
                                        ${status.label}
                                    </span>
                                </div>

                                <h4 class="font-bold text-slate-900 text-sm line-clamp-2 mb-1">${item.description}</h4>
                                <p class="text-xs text-slate-500 mb-3"><i class="fa-solid fa-industry text-slate-400 mr-1"></i> ${item.category} • ${item.manufacturer}</p>
                            </div>

                            <div class="pt-3 border-t border-slate-100 flex items-center justify-between mt-2">
                                <div>
                                    <span class="text-[10px] text-slate-400 font-bold uppercase block">Disponível Total</span>
                                    <span class="text-lg font-bold text-slate-900">${totalAvailable} <span class="text-xs font-normal text-slate-500">${item.unit}</span></span>
                                </div>

                                <button onclick="openDetailModal('${item.id}')" class="text-xs bg-blue-600 text-white hover:bg-blue-700 px-3 py-2 rounded-lg font-medium transition flex items-center gap-1 shadow-xs">
                                    Ver Detalhes <i class="fa-solid fa-arrow-right"></i>
                                </button>
                            </div>
                        </div>
                    `;
      })
      .join("");
  }
}

function renderPagination(pagination) {
  document.getElementById("lblPageRange").innerText = `${pagination.startIndex}-${pagination.endIndex}`;
  document.getElementById("lblTotalItems").innerText = pagination.totalItems;
  document.getElementById("pageNumbers").innerText = `Página ${pagination.currentPage} de ${pagination.totalPages}`;
  document.getElementById("btnPrevPage").disabled = pagination.currentPage <= 1;
  document.getElementById("btnNextPage").disabled = pagination.currentPage >= pagination.totalPages;
}

function updateActiveFiltersBadge() {
  const hasFilters = currentState.search !== "" || currentState.plant !== "ALL" || currentState.category !== "ALL" || currentState.status !== "ALL";
  document.getElementById("activeFiltersBadge").classList.toggle("hidden", !hasFilters);
}

function showLoading(isLoading) {
  const loader = document.getElementById("loadingIndicator");
  const table = document.getElementById("tableViewContainer");
  const grid = document.getElementById("gridViewContainer");
  const empty = document.getElementById("emptyState");

  if (isLoading) {
    loader.classList.remove("hidden");
    table.classList.add("hidden");
    grid.classList.add("hidden");
    empty.classList.add("hidden");

  } else {
    loader.classList.add("hidden");
  }
}

async function openDetailModal(id) {
  currentSelectedMaterialId = id;
  activeHistoryFilter = "ALL";

  try {
    const item = await MockAPI.getMaterialById(id);

    document.getElementById("modalMaterialCode").innerText = item.code;
    document.getElementById("modalCategoryBadge").innerText = item.category;
    document.getElementById("modalMaterialDescription").innerText = item.description;
    document.getElementById("modalManufacturer").innerText = item.manufacturer;
    document.getElementById("modalUnit").innerText = item.unit;
    document.getElementById("modalMainPlant").innerText = `Planta ${item.mainPlant}`;
    document.getElementById("modalLocAisle").innerText = item.location.aisle;
    document.getElementById("modalLocShelf").innerText = item.location.shelf;
    document.getElementById("modalLocBin").innerText = item.location.bin;

    renderModalPlantAvailability(item);
    renderModalHistoryTable(item.movements);
    renderStockChart(item.historyTrends);
    updateHistoryFilterButtonsUI();
    document.getElementById("materialDetailModal").classList.remove("hidden");

  } catch (err) {
    showToast("Erro", "Falha ao carregar detalhes do item", "error");
  }
}

function closeDetailModal() {
  document.getElementById("materialDetailModal").classList.add("hidden");
}

function renderModalPlantAvailability(item) {
  const tbody = document.getElementById("modalPlantAvailabilityBody");

  tbody.innerHTML = mockPlants.map((plant) => {
    const stock = item.stockByPlant[plant.code] || { physical: 0, reserved: 0, minPoint: 0};
    const available = Math.max(0, stock.physical - stock.reserved);

    let situationBadge = '<span class="text-emerald-600 font-bold">Normal</span>';
    if (stock.physical <= 0) { situationBadge = '<span class="text-rose-600 font-bold">Sem Estoque</span>' }
    else if (stock.physical <= stock.minPoint) { situationBadge = '<span class="text-amber-600 font-bold">Abaixo do Min.</span>' }

    return `
                    <tr class="hover:bg-slate-50 transition">
                        <td class="py-2.5 px-4 font-semibold text-slate-800">${plant.name}</td>
                        <td class="py-2.5 px-4 text-right font-medium text-slate-700">${stock.physical} ${item.unit}</td>
                        <td class="py-2.5 px-4 text-right text-slate-500">${stock.reserved} ${item.unit}</td>
                        <td class="py-2.5 px-4 text-right font-bold text-slate-900 bg-slate-50/50">${available} ${item.unit}</td>
                        <td class="py-2.5 px-4 text-right text-slate-500">${stock.minPoint} ${item.unit}</td>
                        <td class="py-2.5 px-4 text-center">${situationBadge}</td>
                    </tr>
                `;
  }).join("");
}

function renderModalHistoryTable(movements) {
  const tbody = document.getElementById("modalHistoryBody");

  let filtered = movements;

  if (activeHistoryFilter !== "ALL") {
    filtered = movements.filter((m) => m.type === activeHistoryFilter);
  }

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" class="text-center py-4 text-slate-400">Nenhum histórico registrado para este filtro.</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered
    .map((m) => {
        
      let badgeType = "bg-blue-100 text-blue-800";
      if (m.type === "ENTRADA") badgeType = "bg-emerald-100 text-emerald-800";
      if (m.type === "SAIDA") badgeType = "bg-rose-100 text-rose-800";
      if (m.type === "TRANSFERENCIA")
        badgeType = "bg-purple-100 text-purple-800";
      if (m.type === "RESERVA") badgeType = "bg-amber-100 text-amber-800";

      return `
                    <tr class="hover:bg-slate-50 transition">
                        <td class="py-2.5 px-3 font-mono text-[11px] text-slate-500">${m.date}</td>
                        <td class="py-2.5 px-3">
                            <span class="px-2 py-0.5 rounded text-[10px] font-bold ${badgeType}">${m.type}</span>
                        </td>

                        <td class="py-2.5 px-3 text-right font-bold text-slate-800">${m.qty}</td>
                        <td class="py-2.5 px-3 text-slate-600 font-medium">Planta ${m.plant}</td>
                        <td class="py-2.5 px-3 text-slate-600">${m.user}</td>
                        <td class="py-2.5 px-3 text-slate-500 italic max-w-xs truncate">${m.notes}</td>
                    </tr>
                `;
    })
    .join("");
}

function filterHistory(type) {
  activeHistoryFilter = type;
  updateHistoryFilterButtonsUI();

  MockAPI.getMaterialById(currentSelectedMaterialId).then((item) => {
    renderModalHistoryTable(item.movements);
  });
}

function updateHistoryFilterButtonsUI() {
  const types = ["All", "Entrada", "Saída", "Transferência"];

  types.forEach((t) => {
    const btn = document.getElementById(`btnHistFilter${t}`);
    if (btn) {
        
      if (t === activeHistoryFilter) {
        btn.className ="px-2.5 py-1 rounded-md font-medium text-blue-600 bg-white shadow-xs";
      } else {
        btn.className ="px-2.5 py-1 rounded-md font-medium text-slate-600 hover:text-slate-900";
      }
    }
  });
}

function renderStockChart(trendData) {
  const ctx = document.getElementById("stockTrendChart").getContext("2d");

  if (stockChartInstance) {
    stockChartInstance.destroy();
  }

  const months = ["Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro"];

  stockChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: months,
      datasets: [
        {
          label: "Nível de Estoque Físico",
          data: trendData,
          borderColor: "#0284c7",
          backgroundColor: "rgba(2, 132, 199, 0.1)",
          borderWidth: 2,
          fill: true,
          tension: 0.3,
          pointBackgroundColor: "#0284c7",
          pointRadius: 4,
        },
      ],
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
      },

      scales: {
        y: {
          beginAtZero: true,
          grid: { color: "#f1f5f9" },
          ticks: { font: { size: 10 } },
        },

        x: {
          grid: { display: false },
          ticks: { font: { size: 10 } },
        },
      },
    },
  });
}

function openNewMovementModal(preselectedId = null) {
  const select = document.getElementById("movementMaterialSelect");

  select.innerHTML = materialsDatabase
    .map(
      (m) => `
                <option value="${m.id}" ${m.id === preselectedId ? "selected" : ""}>
                    ${m.code} - ${m.description}
                </option>
            `,
    )
    .join("");

  document.getElementById("newMovementModal").classList.remove("hidden");
}

function closeNewMovementModal() {
  document.getElementById("newMovementModal").classList.add("hidden");
}

async function submitMovement(event) {
  event.preventDefault();

  const btnSubmit = document.getElementById("btnSubmitMovement");
  btnSubmit.disabled = true;
  btnSubmit.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Processando...`;

  const payload = {
    materialId: document.getElementById("movementMaterialSelect").value,
    type: document.getElementById("movementTypeSelect").value,
    quantity: document.getElementById("movementQuantity").value,
    plant: document.getElementById("movementPlantSelect").value,
    user: document.getElementById("movementUser").value,
    notes: document.getElementById("movementNotes").value,
  };

  try {
    const res = await MockAPI.addMovement(payload);
    showToast(
      "Movimentação Registrada!",
      "O estoque e histórico foram atualizados com sucesso.",
      "success",
    );

    closeNewMovementModal();
    loadMaterialsData();

    if (
      !document.getElementById("materialDetailModal").classList.contains("hidden") &&
      currentSelectedMaterialId === payload.materialId
    ) { openDetailModal(payload.materialId) }

  } catch (err) {
    showToast("Falha na Operação", err.message, "error");

  } finally {
    btnSubmit.disabled = false;
    btnSubmit.innerHTML = `<i class="fa-solid fa-check"></i> Processar Movimentação`;
  }
}

function showToast(title, message, type = "success") {
  const toast = document.getElementById("toastNotification");
  const toastTitle = document.getElementById("toastTitle");
  const toastMessage = document.getElementById("toastMessage");
  const toastIcon = document.getElementById("toastIcon");

  toastTitle.innerText = title;
  toastMessage.innerText = message;

  if (type === "success") {
    toastIcon.className = "text-emerald-400 text-lg";
    toastIcon.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;

  } else {
    toastIcon.className = "text-rose-400 text-lg";
    toastIcon.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
  }

  toast.classList.remove("translate-y-20", "opacity-0", "pointer-events-none");
  setTimeout(() => { toast.classList.add("translate-y-20", "opacity-0", "pointer-events-none") }, 3500);
}