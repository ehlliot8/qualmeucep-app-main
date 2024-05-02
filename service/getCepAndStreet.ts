export async function getCep(lat:number, long:number) {

  let retorno = { erro: true, msg: "", cep:"", street:"" };
  const apiKey = "AIzaSyA-pBLdaRrOZTm7yIfi_KBrjLMlBwjfxJk"

  let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=${apiKey}`;


  const response = await fetch(url);
  const data = await response.json();
  

  if(data.status !== "OK" ||data.results.length < 1){
    retorno.msg = "Falha na comunicação com a api, volte em breve"
    return retorno
  }
  const postalCode = data.results[0].address_components.find((component:any) => component.types.includes('postal_code'));
  const street = data.results[0].address_components.find((component:any) => component.types.includes('route'));

  if (!postalCode || !street) {
      retorno.msg = "Não foi possível buscar o cep para suas coordenadas"
      return retorno;
      }
  retorno.erro = false;
  retorno.cep = postalCode.long_name;
  retorno.street = street.long_name;
  return retorno
}