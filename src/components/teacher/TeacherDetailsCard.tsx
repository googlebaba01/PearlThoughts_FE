import { PencilSquareIcon } from "@heroicons/react/24/outline";

interface TeacherDetailsCardProps {
  name: string;
  role: string;
  birthDate: string;
  onEdit?: () => void;
}

const TeacherDetailsCard: React.FC<TeacherDetailsCardProps> = ({
  name,
  role,
  birthDate,
  onEdit,
}) => (
  <section className="relative bg-white rounded-xl shadow p-6 flex flex-col min-w-[250px]">
    <button
      className="absolute top-4 right-4 p-2 rounded-full bg-blue-50 hover:bg-blue-100 transition"
      onClick={onEdit}
      aria-label="Edit details"
    >
      <PencilSquareIcon className="h-5 w-5 text-blue-600" />
    </button>
    <h2 className="text-lg font-semibold text-gray-800 mb-1">{name}</h2>
    <div className="text-sm text-gray-500">{role}</div>
    <div className="text-xs text-gray-400">Birth Date: {birthDate}</div>
  </section>
);

export default TeacherDetailsCard;