import { Footer } from "@components/Footer";
import { Input } from "@components/Input";
import { YellowButton } from "@components/YellowButton";
import * as S from "./styles";
import { useForm, Controller } from "react-hook-form";

export function CreateEvent() {
  const { control } = useForm();

  return (
    <S.Container>
      <S.Title>Criar Evento</S.Title>
      <S.Form>
        <Controller
          control={control}
          name="eventBanner"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Link do Banner"
              onChangeText={onChange}
              value={value}
              keyboardType="url"
            />
          )}
        />
        <Controller
          control={control}
          name="eventName"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Nome do Evento"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name="eventPrice"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Valor"
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
        />
        <Controller
          control={control}
          name="eventVacancies"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Total de Vagas"
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
        />
        <Controller
          control={control}
          name="eventDate"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Data do evento"
              onChangeText={onChange}
              value={value}
              keyboardType="numeric"
            />
          )}
        />
        <Controller
          control={control}
          name="eventLocal"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Local do evento"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Controller
          control={control}
          name="eventDescription"
          render={({ field: { onChange, value } }) => (
            <Input
              placeholder="Descrição do evento"
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <YellowButton text="Criar" onPress={() => {}} />
      </S.Form>
      {/* <Footer /> */}
    </S.Container>
  );
}
