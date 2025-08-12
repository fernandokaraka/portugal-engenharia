import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/utils'

interface LogoProps {
  className?: string
  variant?: 'horizontal' | 'reduced'
}

export function Logo({ className, variant = 'horizontal' }: LogoProps) {
  return (
    <Link 
      href="/"
      className={cn(
        'flex items-center font-bold text-green-600 hover:text-green-700 transition-colors',
        className
      )}
    >
      {variant === 'horizontal' ? (
        <span className="text-xl md:text-2xl">Portugal Engenharia</span>
      ) : (
        <span className="text-xl md:text-2xl">PE</span>
      )}
    </Link>
  )
}