import * as S from './styles';
import { TextInputProps } from 'react-native';

type Props = TextInputProps & {
  error?: string;
 
};

export function Input(props: Props) {
    return (
        <S.Container>
        <S.Input {...props} />
        <S.Error>
          {props.error} 
        </S.Error>
        </S.Container>
    );
}