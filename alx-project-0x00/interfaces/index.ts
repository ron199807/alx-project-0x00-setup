export interface PillProps {
    title: string;
}

export interface ButtonProps {
  title: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'sm' | 'md' | 'full';
  variant?: 'primary' | 'secondary' | 'outline';
  styles: string;
  className?: string;
  onClick?: () => void;
}