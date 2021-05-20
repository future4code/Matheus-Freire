function calculaNota(ex, p1, p2) {
  let media=(ex*1+p1*2+p2*3)/(1+2+3)
  let nota
  if(media>=9){
    nota="A"
  }else if(media<9 && media>=7.5){
    nota="B"
  }else if(media<7.5 && media>=6){
    nota="C"
  }else if(media<6){
    nota="D"
  }
  return nota
}