import Link from "next/link";
import { Button } from "./ui/button";

interface ScholarshipType {
    name: string;
    link: string;
    description: string;
    level: string;
    deadline?: string;
}

// Notice that scholarship is now an array of ScholarshipType
const ScholarshipPage = ({ scholarship }: { scholarship: ScholarshipType[] }) => {
    return (
        <>
            <div className="mt-[80px]">
                <h2 className="flex items-center text-3xl justify-center mt-2 my-4 p-5">
                    Scholarship Lists
                </h2>

                <div className="grid grid-cols-2 lg:grid-cols-3">
                    {scholarship.map((s, index) => (
                        <div key={index} className="grid rounded-sm p-3 m-4 border">
                            <h2 className="text-xl items-center justify-center mx-2 my-4">{s.name}</h2>
                            <p className="text-xs mx-3">{s.description}</p>
                            <p className="my-3 mx-2 text-sm">Degree Level: {s.level}</p>
                            <p className="p-5 my-2 text-sm">Deadline:{s.deadline}</p>
                            <Link href={s.link}>
                                <Button variant={"link"} className="bg-blue-500 text-white">Apply here</Button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ScholarshipPage;
