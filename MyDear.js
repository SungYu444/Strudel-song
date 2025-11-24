samples({vocal: 'vocal/dear.wav'},'github:SungYu444/Strudel-vocal');

//background
await initHydra() 
voronoi(3, 0.5)
  .modulateScale(osc(8).rotate(1.57), 0.5)
  .thresh(0.6)
  .modulateRotate(osc(1, 0.1), 0)
  .scale(0.7)
  .rotate(() => Math.PI)
  .scrollY(-0.08)
  .color(1.8, 0.1, 0.4)
  .add(
    voronoi(3, 0.5)
      .modulateScale(osc(8).rotate(1.57), 0.5)
      .thresh(0.6)
      .scale(0.5, 0.4)
      .scrollY(0.12)
      .color(1.8, 0.1, 0.4)
  )
  .modulateScale(osc(4, 0.1), () => a.fft[0] * 0.4)
  .scale(() => 1 + a.fft[1] * 0.3)
  .contrast(1.8)
  .add(solid(0.05, 0.02, 0.1), 0.7)
  .out()

setcpm(45)
const intro = stack(
  s("~ ~ ~ ~"),      // silence in the kick lane
  //vocal
  s("vocal").gain(0.9)._scope(),
);

const first = stack(
  //melody
   chord("<Cm Ab Eb Bb>")
    .voicing()
    .slow(4)
    .decay(3)
    .room(0.5)
    .gain(0.2)
    .sound("gm_electric_guitar_clean:0")
    ._pianoroll(),
  note("<g4 bb4 c5 d5 eb5 f5 g5 ~>")
    .scale("C:minor")
    .sound("gm_electric_guitar_clean:0")
    .slow(2)
    .scaleTranspose("<0@4 -3@4 -1@4 -2@4>")
    .transpose(-12)
    .room(0.6)
    .gain(0.2)
    .lpf(2800)
    ._scope(),
  note("<c5 ~ e5 g5 c6 ~ b5 g5 e5>")
    .scale("C:minor")
    .sound("gm_electric_guitar_clean:0")
    .slow(2)
    .scaleTranspose("<0@4 -3@4 -1@4 -2@4>")
    .transpose(-12)
    .room(0.6)
    .gain(0.2)
    .lpf(2800)
    ._spectrum(),

  //Dreamy sound
  note("<c6 e6 g6 a6 e6 c6>")
    .sound("sine")
    .gain(0.02)
    .attack(0.5)
    .decay(2)
    .room(0.98)
    .delay(0.95)
    .delaytime(0.5)
    .delayfeedback(0.9)
    .slow(3)
    ._pianoroll(),
  
 
  note("c5 ~ e5 ~ g5 ~ a5 ~")
    .sound("triangle")
    .gain(0.05)
    .attack(1)
    .release(3)
    .room(0.95)
    .delay(0.85)
    .delayfeedback(0.75)
    .lpf(2000)
    .slow(1)
    ._pianoroll(),
  
 
  note("a2")
    .sound("sine")
    .gain(0.1)
    .lpf(150)
    .room(0.9)
    ._scope()
);

const mid= stack(
  //melody
   chord("<Cm Ab Eb Bb>")
    .voicing()
    .slow(4)
    .decay(3)
    .room(0.5)
    .gain(0.2)
    .sound("gm_electric_guitar_clean:0")
    ._pianoroll(),
  note("<g4 bb4 c5 d5 eb5 f5 g5 ~>")
    .scale("C:minor")
    .sound("gm_electric_guitar_clean:0")
    .slow(2)
    .scaleTranspose("<0@4 -3@4 -1@4 -2@4>")
    .transpose(-12)
    .room(0.6)
    .gain(0.2)
    .lpf(2800)
    ._scope(),
  note("<c5 ~ e5 g5 c6 ~ b5 g5 e5>")
    .scale("C:minor")
    .sound("gm_electric_guitar_clean:0")
    .slow(2)
    .scaleTranspose("<0@4 -3@4 -1@4 -2@4>")
    .transpose(-12)
    .room(0.6)
    .gain(0.2)
    .lpf(2800)
    ._spectrum(),

  //Dreamy sound
  note("<c6 e6 g6 a6 e6 c6>")
    .sound("sine")
    .gain(0.02)
    .attack(0.5)
    .decay(2)
    .room(0.98)
    .delay(0.95)
    .delaytime(0.5)
    .delayfeedback(0.9)
    .slow(3)
    ._pianoroll(),
  
  
  note("c5 ~ e5 ~ g5 ~ a5 ~")
    .sound("triangle")
    .gain(0.05)
    .attack(1)
    .release(3)
    .room(0.95)
    .delay(0.85)
    .delayfeedback(0.75)
    .lpf(2000)
    .slow(1)
    ._pianoroll(),

  note("a2")
    .sound("sine")
    .gain(0.1)
    .lpf(150)
    .room(0.9)
    ._scope(),

  // Drums
  s(` 
     <[jazz ~  ~ [ ~ jazz ] rim ~ jazz ~] [~ [~ jazz] ~ [ ~ jazz ] rim ~ jazz ~]> 
     `).gain(0.05)
      .slow(2)
      ._pianoroll(),
  s("- [ rd ~ rd] - rd").gain(0.02).slow(1),
  s("bd - - - - - - -").gain(0.1),
  s("<~ [~ ~ rd ~]>").lpf(300),
);

const last= stack(
  s("~ ~ ~ ~")
);

arrange(
  [1, intro],  
  [23, first],
  [30, mid],
  [24, first],
  [30, mid],
  [11, first],
  [30, last]
)
