import { Helmet } from 'react-helmet';
import LogInForm from '@/components/Forms/LogInForm';

export default function LogInPage(){
  return (
    <div>
      <Helmet>
        <title>Увійти</title>
      </Helmet>
      <LogInForm />
    </div>
  );
}


// const LogInPage = () => {
//   return <LogInForm />;
// };

// export default LogInPage;