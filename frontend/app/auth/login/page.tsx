'use client';
import { Button, TextInput, Link, FormField } from '@gravity-ui/uikit';
import { useRouter } from 'next/navigation';
import { signIn } from '@/lib/auth/auth';

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    try {
      await signIn({
        email: formData.get('email') as string,
        password: formData.get('password') as string
      });
      router.push('/admin/attractions');
    } catch (error) {
      alert('Authorization failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <h1 className="text-xl mb-4">Admin Login</h1>
      <form onSubmit={handleSubmit}>
        <FormField label="Email">
          <TextInput name="email" type="email" size="l" />
        </FormField>
        <FormField label="Password" className="mt-4">
          <TextInput name="password" type="password" size="l" />
        </FormField>
        <Button type="submit" view="action" size="l" className="mt-6">
          Sign In
        </Button>
      </form>
    </div>
  );
}
