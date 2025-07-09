import React from "react";
import { PlusIcon, PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

interface Address {
  value: string;
  type: string;
}

interface AddressCardProps {
  addresses: Address[];
  onAdd?: () => void;
  onEdit?: (idx: number) => void;
  onDelete?: (idx: number) => void;
}

const AddressCard: React.FC<AddressCardProps> = ({
  addresses,
  onAdd,
  onEdit,
  onDelete,
}) => (
  <section className="relative bg-white rounded-xl shadow p-6 flex flex-col min-w-[250px]">
    <button
      className="absolute top-4 right-4 p-2 rounded-full bg-green-50 hover:bg-green-100 transition"
      onClick={onAdd}
      aria-label="Add address"
    >
      <PlusIcon className="h-5 w-5 text-green-600" />
    </button>
    <span className="font-medium text-gray-700 mb-2">Addresses</span>
    {addresses.map((address, idx) => (
      <div key={idx} className="flex items-center justify-between mb-1">
        <span className="text-gray-600">{address.value}</span>
        <span className="ml-2 text-xs text-gray-400 bg-gray-100 rounded px-2 py-0.5">{address.type}</span>
        <div className="flex gap-1 ml-2">
          <button onClick={() => onEdit?.(idx)} aria-label="Edit address">
            <PencilSquareIcon className="h-4 w-4 text-blue-500" />
          </button>
          <button onClick={() => onDelete?.(idx)} aria-label="Delete address">
            <TrashIcon className="h-4 w-4 text-red-500" />
          </button>
        </div>
      </div>
    ))}
  </section>
);

export default AddressCard;