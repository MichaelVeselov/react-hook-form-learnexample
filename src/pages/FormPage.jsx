import { StudentForm } from '../components/StudentForm';

export const FormPage = (props) => {
  const { studentData, setStudentData } = props;

  return <StudentForm {...studentData} setStudentData={setStudentData} />;
};
