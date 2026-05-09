// Con este mock NO aparecerán flechas porque ninguna carpeta tiene `children`.

import { FolderInterface } from '../interfaces/folder.interface';

export const MOCK_FOLDERS: FolderInterface[] = [
  {
    id: '1',
    name: 'Documentos Legales',
    itemCount: 12,
    children: [
      {
        id: '1-1',
        name: 'Contratos 2024',
        itemCount: 5
      },
      {
        id: '1-2',
        name: 'Contratos 2023',
        itemCount: 7
      }
    ]
  },
  {
    id: '2',
    name: 'Facturas',
    itemCount: 34,
    children: [
      {
        id: '2-1',
        name: 'Enero',
        itemCount: 8
      },
      {
        id: '2-2',
        name: 'Febrero',
        itemCount: 12
      },
      {
        id: '2-3',
        name: 'Marzo',
        itemCount: 14
      }
    ]
  },
  {
    id: '3',
    name: 'Reportes',
    itemCount: 8
  }
];