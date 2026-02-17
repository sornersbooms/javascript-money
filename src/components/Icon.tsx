import React from 'react';
import {
    Megaphone,
    MessageCircle,
    ShoppingBag,
    Phone,
    Youtube,
    Users,
    Bot,
    Send,
    Zap,
    ArrowLeft,
    Scissors
} from 'lucide-react';

interface IconProps {
    name: string;
    size?: number;
    className?: string; // Optional className prop if needed for styling
    style?: React.CSSProperties; // Add style prop
}

const icons: { [key: string]: React.ElementType } = {
    Megaphone,
    MessageCircle,
    ShoppingBag,
    Phone,
    Youtube,
    Users,
    Bot,
    Send,
    Zap,
    ArrowLeft,
    Scissors
};

export const Icon: React.FC<IconProps> = ({ name, size = 24, className, style }) => {
    const LucideIcon = icons[name] || Zap;
    return <LucideIcon size={size} className={className} style={style} />;
};
