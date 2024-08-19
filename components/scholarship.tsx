import Link from "next/link";
import { Button } from "./ui/button";

interface ScholarshipType {
    name: string;
    link: string;
    description: string;
    level: string;
    deadline?: string;
}

const ScholarshipPage = ({ scholarship }: { scholarship: ScholarshipType[] }) => {
    return (
        <div className="mt-[80px]">
            <h2 className="text-3xl font-bold text-center my-4 p-5">
                Scholarship Lists
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {scholarship.map((s, index) => (
                    <div key={index} className="border rounded-sm p-4 shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">{s.name}</h3>
                        <p className="text-sm text-gray-700 mb-4">{s.description}</p>
                        <p className="text-sm mb-2">
                            <span className="font-bold">Degree Level:</span> {s.level}
                        </p>
                        {s.deadline && (
                            <p className="text-sm mb-4">
                                <span className="font-bold">Deadline:</span> {s.deadline}
                            </p>
                        )}
                        <Link href={s.link}>
                            <Button variant={"link"} className="bg-blue-500 hover:bg-blue-700 text-white w-full py-2">
                                Apply Here
                            </Button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScholarshipPage;
