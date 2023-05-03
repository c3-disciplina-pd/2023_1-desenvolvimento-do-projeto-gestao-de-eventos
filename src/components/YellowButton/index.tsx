import { TouchableOpacity } from "react-native";

import * as S from "./styles";

type Props = {
    text: string;
    onPress: () => void;
};

export function YellowButton({ text, onPress }: Props) {
    return (
        <TouchableOpacity onPress={onPress}>
            <S.Button>
                <S.TextButton>{text}</S.TextButton>
            </S.Button>
        </TouchableOpacity>
    );
}