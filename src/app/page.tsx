"use client";
import MainContainer from "@/components/layout/MainContainer";
import TeacherDetailsCard from "@/components/teacher/TeacherDetailsCard";
import EmailCard from "@/components/teacher/EmailCard";
import PhoneCard from "@/components/teacher/PhoneCard";
import AddressCard from "@/components/teacher/AddressCard";
import QualificationsTable, { Qualification } from "@/components/teacher/QualificationsTable";
import GroupQualificationsTable from "@/components/teacher/GroupQualificationsTable";
import AvailabilityCalendar from "@/components/teacher/AvailabilityCalendar";
import TabbedSection from "@/components/teacher/TabbedSection";
import { useState } from "react";

export default function Home() {
  const [emails, setEmails] = useState([
    { value: "alyniaallan@work.com", type: "Work" },
    { value: "alyniaallan@personal.com", type: "Personal" },
  ]);
  const [phones, setPhones] = useState([
    { value: "(416) 648-9057", type: "Mobile" },
  ]);
  const [addresses, setAddresses] = useState([
    { value: "56 Oxford St, North York, Ontario, Canada", type: "Home" },
  ]);
  const [privateQualifications, setPrivateQualifications] = useState<Qualification[]>([
    { name: "Vocal Contemporary", rate: "$30.00" },
    { name: "Vocal Core", rate: "$28.00" },
    { name: "Vocal Hybrid", rate: "$32.00" },
    { name: "Vocal Plus", rate: "$28.00" },
    { name: "Instrument", rate: "$28.00" },
  ]);
  const [groupQualifications, setGroupQualifications] = useState<Qualification[]>([
    { name: "Vocal Contemporary", rate: "$30.00" },
    { name: "Vocal Core", rate: "$28.00" },
    { name: "Vocal Hybrid", rate: "$32.00" },
    { name: "Vocal Plus", rate: "$28.00" },
    { name: "Instrument", rate: "$28.00" },
  ]);

  // Handlers for emails
  const handleAddEmail = () => alert("Add email clicked");
  const handleEditEmail = (idx: number) => alert(`Edit email #${idx}`);
  const handleDeleteEmail = (idx: number) => alert(`Delete email #${idx}`);

  // Handlers for phones
  const handleAddPhone = () => alert("Add phone clicked");
  const handleEditPhone = (idx: number) => alert(`Edit phone #${idx}`);
  const handleDeletePhone = (idx: number) => alert(`Delete phone #${idx}`);

  // Handlers for addresses
  const handleAddAddress = () => alert("Add address clicked");
  const handleEditAddress = (idx: number) => alert(`Edit address #${idx}`);
  const handleDeleteAddress = (idx: number) => alert(`Delete address #${idx}`);

  // Handlers for private qualifications
  const handleAddPrivateQualification = () => alert("Add private qualification clicked");
  const handleEditPrivateQualification = (idx: number) => alert(`Edit private qualification #${idx}`);
  const handleDeletePrivateQualification = (idx: number) => alert(`Delete private qualification #${idx}`);

  // Handlers for group qualifications
  const handleAddGroupQualification = () => alert("Add group qualification clicked");
  const handleEditGroupQualification = (idx: number) => alert(`Edit group qualification #${idx}`);
  const handleDeleteGroupQualification = (idx: number) => alert(`Delete group qualification #${idx}`);

  return (
    <MainContainer>
      {/* Row 1: Details and Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <TeacherDetailsCard
          name="Alynia Allan"
          role="Teacher"
          birthDate="1985-04-12"
          onEdit={() => alert("Edit details clicked")}
        />
        <EmailCard
          emails={emails}
          onAdd={handleAddEmail}
          onEdit={handleEditEmail}
          onDelete={handleDeleteEmail}
        />
      </div>
      {/* Row 2: Phones and Address */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <PhoneCard
          phones={phones}
          onAdd={handleAddPhone}
          onEdit={handleEditPhone}
          onDelete={handleDeletePhone}
        />
        <AddressCard
          addresses={addresses}
          onAdd={handleAddAddress}
          onEdit={handleEditAddress}
          onDelete={handleDeleteAddress}
        />
      </div>
      {/* Row 3: Private and Group Qualifications side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 w-full max-w-4xl mx-auto">
        <div className="overflow-y-auto overflow-x-hidden max-h-80 min-w-[250px] w-full bg-white rounded-xl shadow">
          <QualificationsTable
            qualifications={privateQualifications}
            onAdd={handleAddPrivateQualification}
            onEdit={handleEditPrivateQualification}
            onDelete={handleDeletePrivateQualification}
          />
        </div>
        <div className="overflow-y-auto overflow-x-hidden max-h-80 min-w-[250px] w-full bg-white rounded-xl shadow">
          <GroupQualificationsTable
            qualifications={groupQualifications}
            onAdd={handleAddGroupQualification}
            onEdit={handleEditGroupQualification}
            onDelete={handleDeleteGroupQualification}
          />
        </div>
      </div>
      {/* Row 4: Tabbed section */}
      <TabbedSection />
      {/* Removed calendar below tabbed section */}
    </MainContainer>
  );
}