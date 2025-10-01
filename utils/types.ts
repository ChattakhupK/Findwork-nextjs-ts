export type FormContainerProps = {
  children: React.ReactNode;
  action: (prevState: any, formData: FormData) => Promise<{ message: string }>;
};
