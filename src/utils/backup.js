import { APP_PREFIX, clearAppStorage, getAppStorageSnapshot, importAppStorageSnapshot } from './storage';

export const APP_VERSION = 'Fase 13 — Configurações, Backup e Reset Seguro';

export const storageAreas = [
  { id: 'questions_progress_v1', label: 'Questões', description: 'Respostas, erros, marcadas e histórico.' },
  { id: 'simulations_progress_v1', label: 'Simulados', description: 'Tentativas, notas e último resultado.' },
  { id: 'review_progress_v1', label: 'Revisão', description: 'Fila, revisões e agendamentos.' },
  { id: 'flashcards_progress_v1', label: 'Flashcards', description: 'Cards revisados, vencidos e dominados.' },
  { id: 'study_plan_progress_v1', label: 'Plano', description: 'Missões concluídas e plano diário.' },
  { id: 'subjects_state_v1', label: 'Matérias', description: 'Tópicos concluídos e matérias fixadas.' },
  { id: 'active_page', label: 'Navegação', description: 'Última tela aberta.' },
];

function bytesToKb(value) {
  return Math.max(1, Math.round(value / 1024));
}

export function createBackupPayload() {
  const snapshot = getAppStorageSnapshot();
  return {
    app: 'procurador-itupeva-cinematic-study',
    version: APP_VERSION,
    exportedAt: new Date().toISOString(),
    prefix: APP_PREFIX,
    data: snapshot,
  };
}

export function downloadBackupFile() {
  const payload = createBackupPayload();
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const date = new Date().toISOString().slice(0, 10);
  const link = document.createElement('a');
  link.href = url;
  link.download = `backup-procurador-itupeva-${date}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  return payload;
}

export async function readBackupFile(file) {
  const text = await file.text();
  const payload = JSON.parse(text);
  validateBackupPayload(payload);
  return payload;
}

export function validateBackupPayload(payload) {
  if (!payload || typeof payload !== 'object') {
    throw new Error('Arquivo inválido: conteúdo vazio ou corrompido.');
  }
  if (payload.app !== 'procurador-itupeva-cinematic-study') {
    throw new Error('Este backup não pertence ao app Procurador Itupeva Cinematic Study.');
  }
  if (!payload.data || typeof payload.data !== 'object') {
    throw new Error('Backup sem dados internos.');
  }
  return true;
}

export function restoreBackupPayload(payload, { replace = true } = {}) {
  validateBackupPayload(payload);
  if (replace) clearAppStorage();
  return importAppStorageSnapshot(payload.data);
}

export function getStorageDiagnostics() {
  const snapshot = getAppStorageSnapshot();
  const entries = Object.entries(snapshot);
  const totalBytes = entries.reduce((sum, [key, value]) => sum + key.length + JSON.stringify(value).length, 0);

  const byArea = storageAreas.map((area) => {
    const value = snapshot[area.id];
    const raw = value === undefined ? '' : JSON.stringify(value);
    let count = 0;
    if (Array.isArray(value)) count = value.length;
    if (value && typeof value === 'object' && !Array.isArray(value)) {
      count = Object.keys(value).length;
      if (value.answers) count = Object.keys(value.answers).length;
      if (value.attempts) count = value.attempts.length;
      if (value.cards) count = Object.keys(value.cards).length;
    }

    return {
      ...area,
      exists: value !== undefined,
      count,
      sizeKb: value === undefined ? 0 : bytesToKb(raw.length),
    };
  });

  const unknownKeys = entries
    .map(([key]) => key)
    .filter((key) => !storageAreas.some((area) => area.id === key));

  return {
    generatedAt: new Date().toISOString(),
    totalKeys: entries.length,
    totalSizeKb: bytesToKb(totalBytes),
    byArea,
    unknownKeys,
    healthy: entries.every(([, value]) => value !== undefined),
  };
}

export function resetStorageArea(areaId) {
  localStorage.removeItem(`${APP_PREFIX}${areaId}`);
  return getStorageDiagnostics();
}
