import React from "react";
import { PlusIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

export interface Qualification {
  name: string;
  rate: string;
}

interface QualificationsTableProps {
  qualifications: Qualification[];
  title?: string;
  onAdd?: () => void;
  onEdit?: (idx: number) => void;
  onDelete?: (idx: number) => void;
}

const QualificationsTable: React.FC<QualificationsTableProps> = ({
  qualifications,
  title = "Private Qualifications",
  onAdd,
  onEdit,
  onDelete,
}) => (
  <section className="relative bg-white rounded-xl shadow p-6 mt-4 w-full max-w-xl">
    <button
      className="absolute top-4 right-4 p-2 rounded-full bg-green-50 hover:bg-green-100 transition"
      onClick={onAdd}
      aria-label="Add qualification"
    >
      <PlusIcon className="h-5 w-5 text-green-600" />
    </button>
    <h3 className="text-md text-gray-900 font-semibold mb-4">{title}</h3>
    <table className="w-full text-sm">
      <thead>
        <tr className="text-left text-gray-500 border-b">
          <th className="py-2">Name</th>
          <th className="py-2">Rate ($/hr)</th>
          <th className="py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {qualifications.map((q, idx) => (
          <tr key={q.name + idx} className="border-b last:border-b-0">
            <td className="py-2 text-gray-900 font-medium">{q.name}</td>
            <td className="py-2 text-gray-900 font-medium">{q.rate}</td>
            <td className="py-2">
              <div className="flex gap-1">
                <button onClick={() => onEdit?.(idx)} aria-label="Edit qualification">
                  <PencilSquareIcon className="h-4 w-4 text-blue-500" />
                </button>
                <button onClick={() => onDelete?.(idx)} aria-label="Delete qualification">
                  <TrashIcon className="h-4 w-4 text-red-500" />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

export default QualificationsTable;
