'use client';
import { useState } from 'react';
import { Button, TextInput, FormField } from '@gravity-ui/uikit';
import { signIn } from '@/lib/auth/auth';

export function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <FormField label="Email">
        <TextInput
          value={email}
          onUpdate={setEmail}
          type="email"
          size="l"
        />
      </FormField>
      <FormField label="Password">
        <TextInput
          value={password}
          onUpdate={setPassword}
          type="password"
          size="l"
        />
      </FormField>
      <Button type="submit" view="action" size="l" width="max">
        Sign In
      </Button>
    </form>
  );
}
