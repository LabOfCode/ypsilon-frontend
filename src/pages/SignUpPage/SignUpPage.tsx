import { Helmet } from 'react-helmet';
import { SignupForm } from '@/components/Forms/SignupForm';

export default function SignUpPage(){
  return (
    <div>
      <Helmet>
        <title>Зареєструватись</title>
      </Helmet>
      <SignupForm />
    </div>
  );
}

// const SignUpPage = () => {
//   return <SignupForm />;
// };

// export default SignUpPage;