import Coordenadas from "../src/interface/ICoordenadas";

function calcularParesDeLocalizacao(pontoInicial: Coordenadas, raioEmMetros: number = 70): Coordenadas[] {
    const grausPorMetro = 1 / 111120;

    const deslocamentoLat = raioEmMetros * grausPorMetro;
    const deslocamentoLon = raioEmMetros * grausPorMetro / Math.cos(pontoInicial.latitude * (Math.PI / 180));

    const direcoes = [
        { lat: deslocamentoLat, lon: 0 }, // Norte
        { lat: -deslocamentoLat, lon: 0 }, // Sul
        { lat: 0, lon: deslocamentoLon }, // Leste
        { lat: 0, lon: -deslocamentoLon }, // Oeste
        { lat: deslocamentoLat, lon: deslocamentoLon }, // Nordeste
        { lat: deslocamentoLat, lon: -deslocamentoLon }, // Noroeste
        { lat: -deslocamentoLat, lon: deslocamentoLon }, // Sudeste
        { lat: -deslocamentoLat, lon: -deslocamentoLon } // Sudoeste
    ];

    const paresDeLocalizacao: Coordenadas[] = direcoes.map(direcao => ({
        latitude: pontoInicial.latitude + direcao.lat,
        longitude: pontoInicial.longitude + direcao.lon
    }));

    return paresDeLocalizacao;
}

export default calcularParesDeLocalizacao;
