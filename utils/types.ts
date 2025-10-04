export type FormContainerProps = {
  children: React.ReactNode;
  action: (prevState: any, formData: FormData) => Promise<{ message: string }>;
};

export type WorkCardProps = {
  id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  province: string;
  price: number;
  lat: number;
  lng: number;
};
