import React from "react";

interface ContactInfoCardProps {
  email: string;
  phone: string;
  address: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({
  email,
  phone,
  address,
}) => (
  <section className="bg-white rounded-xl shadow p-6 flex flex-col gap-2 min-w-[250px]">
    <div>
      <span className="font-medium text-gray-700">Email: </span>
      <span className="text-gray-600">{email}</span>
    </div>
    <div>
      <span className="font-medium text-gray-700">Phone: </span>
      <span className="text-gray-600">{phone}</span>
    </div>
    <div>
      <span className="font-medium text-gray-700">Address: </span>
      <span className="text-gray-600">{address}</span>
    </div>
  </section>
);

export default ContactInfoCard;