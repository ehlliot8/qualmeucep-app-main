import Coordenadas from "../src/interface/ICoordenadas";

 function calcularParesDeLocalizacao(pontoInicial: Coordenadas): Coordenadas[] {
    const raioEmMetros = 70;
    const grausPorMetro = 1 / 111120; 

    const direcoes = [
        { lat: raioEmMetros * grausPorMetro, lon: 0 },
        { lat: -raioEmMetros * grausPorMetro, lon: 0 }, 
        { lat: 0, lon: raioEmMetros * grausPorMetro / Math.cos(pontoInicial.latitude * (Math.PI / 180)) }, // Leste
        { lat: 0, lon: -raioEmMetros * grausPorMetro / Math.cos(pontoInicial.latitude * (Math.PI / 180)) }, // Oeste
    ];

    const paresDeLocalizacao: Coordenadas[] = direcoes.map(direcao => ({
        latitude: pontoInicial.latitude + direcao.lat,
        longitude: pontoInicial.longitude + direcao.lon
    }));

    return paresDeLocalizacao;
}

export default calcularParesDeLocalizacao;