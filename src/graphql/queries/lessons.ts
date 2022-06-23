import { gql } from "@apollo/client";

export const GET_LESSONS_QUERY = gql`
  query GetLessons {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      title
      slug
      availableAt
      lessonType
    }
  }
`;

export const GET_LESSON_BY_SLUG = gql`
  query GetLessonBySlug ($slug: String) {
    lesson(where: {slug: $slug}) {
      title
      slug
      description
      id
      availableAt
      videoId
      teacher {
        avatarURL
        id
        name
        bio
      }
    }
  }
`;