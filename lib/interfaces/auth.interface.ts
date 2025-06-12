export interface currentSessionProps {
  user: {
    id: string;
    name: string;
    emailVerified: boolean;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    image?: string | null | undefined | undefined;
  };
  session: {
    id: string;
    token: string;
    userId: string;
    userAgent?: string | null | undefined | undefined;
  };
}
