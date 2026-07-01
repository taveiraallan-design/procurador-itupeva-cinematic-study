export const APP_PREFIX = 'procurador_itupeva_cinematic_v2_';

function normalizeStoredValue(parsed, fallback) {
  if (parsed === null || parsed === undefined) return fallback;

  const fallbackIsObject = fallback && typeof fallback === 'object' && !Array.isArray(fallback);
  const parsedIsObject = parsed && typeof parsed === 'object' && !Array.isArray(parsed);

  if (fallbackIsObject && !parsedIsObject) return fallback;
  if (Array.isArray(fallback) && !Array.isArray(parsed)) return fallback;

  if (fallbackIsObject && parsedIsObject) {
    return { ...fallback, ...parsed };
  }

  return parsed;
}


function ensureObject(value) {
  return value && typeof value === 'object' && !Array.isArray(value) ? value : {};
}

function ensureArray(value) {
  return Array.isArray(value) ? value : [];
}

function normalizeByKey(key, value, fallback) {
  const base = normalizeStoredValue(value, fallback);

  if (key === 'questions_progress_v1') {
    const object = ensureObject(base);
    return {
      answers: ensureObject(object.answers),
      marked: ensureArray(object.marked),
      history: ensureArray(object.history),
    };
  }

  if (key === 'simulations_progress_v1' || key === 'simulations_progress_v2') {
    const object = ensureObject(base);
    return {
      attempts: ensureArray(object.attempts),
      lastResult: object.lastResult && typeof object.lastResult === 'object' ? object.lastResult : null,
    };
  }

  if (key === 'review_progress_v1') {
    const object = ensureObject(base);
    return {
      items: ensureObject(object.items),
      log: ensureArray(object.log),
    };
  }

  if (key === 'flashcards_progress_v1') {
    const object = ensureObject(base);
    return {
      cards: ensureObject(object.cards),
      log: ensureArray(object.log),
    };
  }

  if (key === 'study_plan_progress_v1') {
    const object = ensureObject(base);
    return {
      completed: ensureObject(object.completed),
      log: ensureArray(object.log),
    };
  }

  if (key === 'subjects_progress_v1') {
    const object = ensureObject(base);
    return {
      selectedSubjectId: typeof object.selectedSubjectId === 'string' ? object.selectedSubjectId : (fallback?.selectedSubjectId || 'direito-administrativo'),
      completedTopics: ensureObject(object.completedTopics),
      pinnedSubjects: ensureArray(object.pinnedSubjects),
    };
  }

  if (key === 'official_syllabus_progress_v1') {
    const object = ensureObject(base);
    return {
      completed: ensureObject(object.completed),
      pinned: ensureArray(object.pinned),
      lastOpenedSubjectId: typeof object.lastOpenedSubjectId === 'string' ? object.lastOpenedSubjectId : (fallback?.lastOpenedSubjectId || 'direito-administrativo'),
    };
  }

  return base;
}

export function safeGet(key, fallback) {
  try {
    const raw = localStorage.getItem(`${APP_PREFIX}${key}`);
    if (!raw || raw === 'undefined' || raw === 'null') return fallback;
    const parsed = JSON.parse(raw);
    return normalizeByKey(key, parsed, fallback);
  } catch (error) {
    console.warn(`Erro ao ler localStorage: ${key}`, error);
    return fallback;
  }
}

export function safeSet(key, value) {
  try {
    localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn(`Erro ao salvar localStorage: ${key}`, error);
    return false;
  }
}

export function safeRemove(key) {
  try {
    localStorage.removeItem(`${APP_PREFIX}${key}`);
  } catch (error) {
    console.warn(`Erro ao remover localStorage: ${key}`, error);
  }
}

export function clearAppStorage() {
  try {
    Object.keys(localStorage)
      .filter((key) => key.startsWith(APP_PREFIX))
      .forEach((key) => localStorage.removeItem(key));
    return true;
  } catch (error) {
    console.warn('Erro ao limpar dados do app', error);
    return false;
  }
}

export function getAppStorageSnapshot() {
  try {
    return Object.keys(localStorage)
      .filter((key) => key.startsWith(APP_PREFIX))
      .sort()
      .reduce((snapshot, fullKey) => {
        const shortKey = fullKey.replace(APP_PREFIX, '');
        const raw = localStorage.getItem(fullKey);
        try {
          snapshot[shortKey] = raw ? JSON.parse(raw) : null;
        } catch (error) {
          snapshot[shortKey] = { __corrupted: true, raw };
        }
        return snapshot;
      }, {});
  } catch (error) {
    console.warn('Erro ao criar snapshot do app', error);
    return {};
  }
}

export function importAppStorageSnapshot(snapshot) {
  if (!snapshot || typeof snapshot !== 'object') return 0;
  let imported = 0;
  Object.entries(snapshot).forEach(([key, value]) => {
    if (!key || key.includes('..')) return;
    localStorage.setItem(`${APP_PREFIX}${key}`, JSON.stringify(value));
    imported += 1;
  });
  return imported;
}
