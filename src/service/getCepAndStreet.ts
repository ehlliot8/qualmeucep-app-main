import { CepResponse } from "../interface/ICepResponse";

export async function getCep(lat: number, long: number): Promise<CepResponse> {
  let retorno: CepResponse = { erro: true, msg: "", cep: "", street: "" };
  const apiKey = "AIzaSyA-pBLdaRrOZTm7yIfi_KBrjLMlBwjfxJk";

  let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  if (data.status !== "OK" || data.results.length < 1) {
      retorno.msg = "Falha na comunicação com a API, volte em breve";
      return retorno;
  }

  for (const result of data.results) {
      const postalCode = result.address_components.find((component: any) => component.types.includes('postal_code'));
      const street = result.address_components.find((component: any) => component.types.includes('route'));
      const streetNumber = result.address_components.find((component: any) => component.types.includes('street_number'));

      if (postalCode && street && streetNumber) {
          retorno.erro = false;
          retorno.cep = postalCode.long_name;
          retorno.street = street.long_name;
        
          return retorno;
      }
  }

  retorno.msg = "Não foi possível buscar o CEP para suas coordenadas";
  return retorno;
}