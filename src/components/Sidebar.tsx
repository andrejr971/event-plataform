import { useQuery } from "@apollo/client";
import { GET_LESSONS_QUERY } from "../graphql/queries/lessons";
import { Lesson } from "./Lesson";

interface GetLessonQueryResponse {
  lessons: {
    id: string;
    title: string;
    slug: string;
    availableAt: string;
    lessonType: 'live' | 'class'
  }[]
}

export function Sidebar() {
  const { data } = useQuery<GetLessonQueryResponse>(GET_LESSONS_QUERY);

  console.log(data)

  return (
    <aside
      className="w-[348px] bg-gray-700 p-6 border-l border-gray-600"
    >
      <span 
        className="font-bold text-2xl pb-6 border-b border-gray-500 block"
      >
        Cronograma de aulas
      </span>
      
      <div 
        className="flex flex-col gap-8 mt-5"
      >
        {data?.lessons.map(lesson => (
          <Lesson
            key={lesson.id}
            title={lesson.title}
            availableAt={new Date(lesson.availableAt)}
            slug={lesson.slug}
            type={lesson.lessonType}
          />
        ))}
      </div>
    </aside>
  );
};