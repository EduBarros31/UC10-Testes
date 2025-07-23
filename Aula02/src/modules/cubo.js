function VolumeCubo(a) {
    if (typeof a !== 'number' ) {
        return ("Erro:parametros invalidos");
    }
    return a * a * a;
  }
  module.exports = VolumeCubo;