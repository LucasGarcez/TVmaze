export interface StorageService {
  getItem: <T>(key: string) => Promise<T | null>;
  setItem: <T>(key: string, value: T) => Promise<void>;
  removeItem: (key: string) => Promise<void>;
}

export let storageService: StorageService;

export function initializeStorage(storage: StorageService) {
  storageService = storage;
}
