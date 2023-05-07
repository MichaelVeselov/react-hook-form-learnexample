import { StudentCard } from '../components/StudentCard';

export const HomePage = (props) => {
  const { studentData } = props;

  return <StudentCard {...studentData} />;
};
