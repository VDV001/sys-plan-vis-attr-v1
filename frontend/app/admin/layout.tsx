'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { checkAuth } from '@/lib/auth/auth';
import { AppLayout, PageHeader, Link } from '@gravity-ui/uikit';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter();

  useEffect(() => {
    checkAuth().catch(() => router.push('/login'));
  }, []);

  return (
    <AppLayout>
      <AppLayout.Header>
        <PageHeader
          title="Travel Planner Admin"
          actions={<Link href="/">Public Site</Link>}
        />
      </AppLayout.Header>
      <AppLayout.Content>{children}</AppLayout.Content>
    </AppLayout>
  );
}
