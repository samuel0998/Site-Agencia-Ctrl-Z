// feito no zdog

let illo = new Zdog.Illustration({
    element: '.logo3d',
    dragRotate: true,
  });
  
  // z logo
  new Zdog.Shape({
    addTo: illo,
    path: [
      { x: -32, y: -40 }, 
      { x:  32, y: -40 }, 
      { x: -32, y:  40 }, 
      { x:  32, y:  40 }, 
    ],
    closed: false,
    stroke: 20,
    color: '#00ff43',
  });
  
  function animate() {
    illo.rotate.y += 0.03;
    illo.rotate.x += 0.03;
    illo.updateRenderGraph();
    requestAnimationFrame( animate );
  }
  
  animate();