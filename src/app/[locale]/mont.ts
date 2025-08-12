import { Montserrat } from 'next/font/google';
const mont = Montserrat({
  subsets: ['latin'],
  weight: ['400','500','600','700','800'],
  display: 'swap'
});
export const MontSerrat = mont.className;
