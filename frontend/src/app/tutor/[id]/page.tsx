import Link from "next/link";
import { MOCK_TUTORS } from "@/lib/mock-data";
import { TutorProfileClient } from "./tutor-profile-client";

type TutorProfilePageProps = {
  params: {
    id: string;
  };
};

export default function TutorProfilePage({ params }: TutorProfilePageProps) {
  const tutor = MOCK_TUTORS.find((item) => item.id === params.id);

  if (!tutor) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-slate-900">Tutor Not Found</h2>
        <Link href="/student/tutors" className="text-primary hover:underline mt-4 inline-block">
          Back to Search
        </Link>
      </div>
    );
  }

  return <TutorProfileClient tutor={tutor} />;
}
