import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
};

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="flex w-32 text-white md:w-36">
            <AcmeLogo />
            <div className="ml-10 mt-2 text-right text-xs">
              <p>email:user@nextmail.com</p>
              <p>pass:123456</p>
            </div>
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
