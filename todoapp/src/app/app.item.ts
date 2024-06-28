export interface AppItem {
  id: number;
  yapildi: boolean;
  tesis: string;
  bolum: string;
  talepTipi: string;
  talepCesidi: string;
  isinTuru: string;
  talepEden: string;
  acilDurum: string;
  description: string;
  fileName: string | null; // Dosya adı veya null
  assignedPerson: string;
}