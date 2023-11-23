import Text from "@/components/atoms/Text";

type IconTextProps = {
    icon: React.ReactNode;
    text: string;
    direction?: 'row' | 'column';
    customClass?: string;
    textStyles?: string;
    handleClick?: () => void;
};

const IconText: React.FC<IconTextProps> = ({ icon, text, direction='row', customClass, textStyles, handleClick }) =>
    <div onClick={handleClick} className={`flex items-center justify-center gap-2 ${direction === 'row' ? 'flex-row' : 'flex-col'} ${customClass}`}>
        {icon}
        <Text variant="body" customStyle={textStyles}>{text}</Text>
    </div>

export default IconText;