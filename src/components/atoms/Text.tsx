const Text: React.FC<{ children: React.ReactNode; variant?: 'title' | 'body' | 'subtitle'; customStyle?: string }> = ({ children, variant = 'body', customStyle }) => {
    const baseStyle = 'text-gray-100';
    const variantStyles = {
        title: 'text-2xl font-bold',
        body: 'text-base',
        subtitle: 'text-sm',
    };
    return <p className={`${baseStyle} ${variantStyles[variant]} ${customStyle}`}>{children}</p>;
};

export default Text;